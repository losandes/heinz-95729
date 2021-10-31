module.exports = (test, dependencies) => test('240-070-mongodb', {
  given: () => {
    const { findDocuments } = require('./exercise')
    const books = {
      book1: { title: 'Unsheltered', price: 5.00 },
      book2: { title: 'The Lacuna', price: 19.00 },
      book3: { title: 'The Poisinwood Bible', price: 25.00 },
    }

    return { findDocuments, books }
  },
  'when documents are queried with `greater than`': {
    when: async ({ findDocuments, books }) => {
      await dependencies.db.books().insertMany([
        books.book1,
        books.book2,
        books.book3,
      ])
      const actual = await findDocuments(dependencies.db.db())

      return { actual, books }
    },
    'it should return an array': (t) => (err, result) => {
      t.ifError(err)
      const { actual, books } = result

      t.strictEqual(actual && Array.isArray(actual), true, 'it should return an array of documents')

      const book1 = actual.find((doc) => doc.title === books.book1.title)
      const book2 = actual.find((doc) => doc.title === books.book2.title)
      const book3 = actual.find((doc) => doc.title === books.book3.title)

      t.strictEqual(typeof book1, 'undefined', 'books less than $10 should not be returned')
      t.strictEqual(typeof book2, 'object', 'books greater than $10 should be returned')
      t.strictEqual(typeof book3, 'object', 'books greater than $10 should be returned')
    },
  },
})
