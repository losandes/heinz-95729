module.exports = (test, dependencies) => test('240-100-mongodb', {
  given: () => {
    const { deleteDocuments } = require('./exercise')
    const books = {
      book1: { title: 'Time of Hope', category: 'FICTION' },
      book2: { title: 'The Sleep of Reason', category: 'FICTION' },
    }

    return { deleteDocuments, books }
  },
  'when a multiple documents are removed': {
    when: async ({ deleteDocuments, books }) => {
      await dependencies.db.books().insertMany([books.book1, books.book2])
      const actual = await deleteDocuments(dependencies.db.db())

      return { actual, books }
    },
    'it should indicate the number of documents that were removed': (t) => (err, result) => {
      t.ifError(err)
      const { actual } = result
      t.strictEqual(typeof actual, 'object', 'it should return results')
      t.strictEqual(actual.deletedCount, 2, 'it should delete 2 documents')
    },
  },
})
