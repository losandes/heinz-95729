module.exports = (test) => test('240-010-mongodb', {
  given: () => require('./exercise').connectToMongoDb,
  'when MongoClient.connect succeeds': {
    when: async (connectToMongoDb) => connectToMongoDb(),
    'it should present a data connection as the 2nd argument': (t) => (err, client) => {
      t.ifError(err) // throws if err exists
      t.strictEqual(typeof client.db, 'function')
      const db = client.db()
      t.strictEqual(typeof db, 'object')
      t.strictEqual(typeof db.collection, 'function')
      t.strictEqual(typeof db.databaseName, 'string')
      client.close()
    },
  },
})
