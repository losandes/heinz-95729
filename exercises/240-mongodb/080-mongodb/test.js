module.exports = (test, dependencies) => test('240-080-mongodb', {
    given: () => {
        const { findDocuments } = require('./exercise')
        const books = {
            book1: { 'title': 'The Winter Soldier', price: 8.00 },
            book2: { 'title': 'West With The Night', price: 19.00 },
            book3: { 'title': 'Stories of Eva Luna', price: 25.00 },
        }

        return { findDocuments, books }
    },
    'when documents are queried with `less than or equal to`': {
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
            t.equal(actual && Array.isArray(actual), true, 'it should return an array of documents')

            const one = actual.find((doc) => doc.title === books.book1.title)
            const two = actual.find((doc) => doc.title === books.book2.title)
            const three = actual.find((doc) => doc.title === books.book3.title)

            t.strictEqual(typeof one, 'object')
            t.strictEqual(typeof two, 'undefined')
            t.strictEqual(typeof three, 'undefined')
        }
    }
})
