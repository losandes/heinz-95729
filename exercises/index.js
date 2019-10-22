const { MongoClient, Server } = require('mongodb')
const supposed = require('supposed')
const teardowns = []
const dbConfig = {
  host: 'localhost',
  port: 27017
}
const dbClient = new Promise((resolve) => {
  MongoClient(new Server(dbConfig.host, dbConfig.port))
    .connect((err, client) => {
      if (err) resolve({ err })
      else resolve(client)
    })
})

const DB_ERROR = 'Database connection failed. Make sure mongo is running on port 27017, and check ./exercises/index.js for debugging'

const db = {
  config: dbConfig,
  client: () => new Error(DB_ERROR),
  db: () => new Error(DB_ERROR),
  books: () => new Error(DB_ERROR)
}

const setupDb = () => dbClient.then((client) => new Promise((resolve) => {
  if (client.err) {
    return resolve()
  }

  db.client = () => client
  db.db = () => client.db('mongo-exercises')
  db.books = () => db.db().collection('books')

  db.books().drop(resolve)
}))

const inject = {
  teardown: (teardown) => teardowns.push(teardown),
  db
}

module.exports = setupDb()
  // .then((mongoSetup) => { // uncomment to debug
  //   // console.log(mongoSetup)
  // })
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
      return db.client().close()
    } catch (e) {
      // uncomment to debug
      // console.log(e)
    }
  })
)
