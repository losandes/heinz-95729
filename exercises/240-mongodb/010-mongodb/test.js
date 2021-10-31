module.exports = (test) => test('240-010-mongodb', {
    given: () => require('./exercise').connectToMongoDb,
    'when MongoClient.connect succeeds': {
        when: async (connectToMongoDb) => connectToMongoDb(),
        'it should present a data connection as the 2nd argument': (t) => (err, client) => {
            t.ifError(err) // throws if err exists
            t.equal(typeof client.db, 'function')
            const db = client.db()
            t.equal(typeof db, 'object')
            t.equal(typeof db.collection, 'function')
            t.equal(typeof db.databaseName, 'string')
            client.close()
        }
    }
})
