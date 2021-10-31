module.exports = (test, dependencies) => test('240-050-mongodb', {
  given: () => {
    const { updateDocuments } = require('./exercise')
    const books = {
      one: { title: 'The Vexations' },
      two: { title: 'The Familiars' },
      three: { title: 'Pigs in Heaven' },
    }

    return { updateDocuments, books }
  },
  'when multiple documents are updated': {
    when: async ({ updateDocuments, books }) => {
      await dependencies.db.books().insertMany([
        books.one,
        books.two,
        books.three,
      ])
      const actual = await updateDocuments(dependencies.db.db())
      const find = async (book) =>
        dependencies.db.books().find({ title: book.title }).toArray()
      const found = await Promise.all([
        find(books.one),
        find(books.two),
        find(books.three),
      ])

      return { actual, books, found: found.map((docs) => docs[0]) }
    },
    'it should update documents that match the query': (t) => (err, result) => {
      t.ifError(err) // throws if err exists
      const { actual, found, books } = result

      t.strictEqual(actual.modifiedCount >= 3, true, 'it should match all of the documents in the books collection')
      t.strictEqual(found.find((book) => book.title === books.one.title).type, 'BOOK', `it should add the type property for ${books.one.title}`)
      t.strictEqual(found.find((book) => book.title === books.two.title).type, 'BOOK', `it should add the type property for ${books.two.title}`)
      t.strictEqual(found.find((book) => book.title === books.three.title).type, 'BOOK', `it should add the type property for ${books.three.title}`)
    },
  },
})
