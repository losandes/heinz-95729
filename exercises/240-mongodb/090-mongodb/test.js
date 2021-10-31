module.exports = (test, dependencies) => test('240-090-mongodb', {
  given: () => {
    const { deleteDocument } = require('./exercise')
    const books = {
      book1: { title: 'The Two Cultures and the Scientific Revolution' },
    }

    return { deleteDocument, books }
  },
  'when a single document is removed': {
    when: async ({ deleteDocument, books }) => {
      await dependencies.db.books().insertMany([books.book1])
      const actual = await deleteDocument(dependencies.db.db())

      return { actual, books }
    },
    'it should delete 1 document': (t) => (err, result) => {
      t.ifError(err)
      const { actual } = result
      t.strictEqual(typeof actual, 'object', 'it should return results')
      t.strictEqual(actual.deletedCount, 1, 'it should delete 1 document')
    },
  },
})
