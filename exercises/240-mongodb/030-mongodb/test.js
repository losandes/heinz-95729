module.exports = (test, dependencies) => test('240-030-mongodb', {
  given: () => {
    const { listDocuments } = require('./exercise')
    const books = {
      one: { title: 'Liar and Spy' },
      two: { title: 'Harry Potter and the Sorcerer\'s Stone' },
      three: { title: 'Pages Between Us' },
    }

    return { listDocuments, books }
  },
  'when documents are listed': {
    when: async ({ listDocuments, books }) => {
      await dependencies.db.books()
        .insertMany([books.one, books.two, books.three])
      const actual = await listDocuments(dependencies.db.db())

      return { actual, books }
    },
    'they should be returned in an array': (t) => (err, result) => {
      t.ifError(err) // throws if err exists
      const { actual, books } = result
      t.strictEqual(actual && Array.isArray(actual), true, 'it should return an array of documents')

      const titles = actual.map((doc) => doc.title)

      t.strictEqual(titles.indexOf(books.one.title) > -1, true, `it should find ${books.one.title}`)
      t.strictEqual(titles.indexOf(books.two.title) > -1, true, `it should find ${books.two.title}`)
      t.strictEqual(titles.indexOf(books.three.title) > -1, true, `it should find ${books.three.title}`)
    },
  },
})
