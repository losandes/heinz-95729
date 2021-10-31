module.exports = (test, dependencies) => test('240-040-mongodb', {
    given: () => {
        const { getDocument } = require('./exercise')
        const books = {
            one: { 'title': 'The Dutch House' }
        }

        return { getDocument, books }
    },
    'when a single document is retrieved': {
        when: async ({ getDocument, books }) => {
            await dependencies.db.books().insertMany([books.one])
            const actual = await getDocument(dependencies.db.db())

            return { actual, books }
        },
        'it should be presented as the 2nd argument': (t) => (err, result) => {
            t.ifError(err) // throws if err exists
            const { actual, books } = result
            t.equal(typeof actual, 'object', 'it should return a document')
            t.equal(actual.title, books.one.title, `it should return the ${books.one.title} book`)
        }
    }
})
