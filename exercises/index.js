/* eslint-disable no-console */
const { MongoClient } = require('mongodb')
const supposed = require('supposed')
const teardowns = []
const dbConfig = {
  host: 'localhost',
  port: 27017,
  db: 'mongo-exercises',
}
const url = `mongodb://${dbConfig.host}:${dbConfig.port}`
const client = new MongoClient(url, { useUnifiedTopology: false }, { useNewUrlParser: true }, { connectTimeoutMS: 2000 }, { keepAlive: 1 })

const DB_ERROR = 'Database connection failed. Make sure mongo is running on port 27017, and check ./exercises/index.js for debugging'

const db = {
  config: dbConfig,
  client: () => new Error(DB_ERROR),
  db: () => new Error(DB_ERROR),
  books: () => new Error(DB_ERROR),
}

const clearBooksCollection = async () => {
  await db.books().insertMany([
    { title: 'clear the books collection before running tests' },
  ])
  db.books().drop()

  return db
}

const setupDb = async () => {
  client.connect()

  db.client = () => client
  db.db = () => client.db('mongo-exercises')
  db.books = () => db.db().collection('books')

  return db
}

const inject = {
  teardown: (teardown) => teardowns.push(teardown),
  db,
}

module.exports = setupDb()
  // .then((mongoSetup) => { // uncomment to debug
  //   console.log(mongoSetup)
  // })
  .then(() => clearBooksCollection())
  .then(() => supposed.Suite({ name: 'heinz-95729-exercises', inject })
    .runner({
      cwd: __dirname,
      matchesNamingConvention: /.(test\.js)$/i,
    })
    .run()
    .then(() => {
      teardowns.forEach(async (teardown) => await teardown())
    })
    .catch((e) => console.log(e))
    .finally(() => {
      try {
        return client.close()
      } catch (e) {
      // uncomment to debug
      // console.log(e)
      }
    }),
  )
