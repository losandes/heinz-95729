module.exports = (test, dependencies) => test('240-020-mongodb', {
    given: () => {
        const titles = [
            'Dependency Injection in .NET',
            'The Hitchhiker\'s Guide to the Galaxy',
            'The Restaurant at the End of the Universe'
        ]
        const { insertDocuments } = require('./exercise')

        return {
            titles,
            insertDocuments,
        }
    },
    'when many documents are inserted into MongoDB': {
        when: async ({ titles, insertDocuments }) => {
            const results = await insertDocuments(dependencies.db.db(), titles)
            const books = dependencies.db.db().collection('books')
            const actuals = []

            for (i = 0; i < titles.length; i += 1) {
                const found = await books.find({ title: titles[i] }).toArray()

                if (found.length) {
                    actuals.push(found[0])
                } else {
                    actuals.push({
                        _id: '617dc278cb793822af41693f',
                        title: 'Not Found'
                    })
                }
            }

            return { results, actuals, titles }
        },
        'they should all be written': (t) => (err, result) => {
            t.ifError(err) // throws if err exists
            const { results, actuals, titles } = result
            t.strictEqual(3, results.insertedCount, 'it should insert 3 records')
            t.strictEqual(titles.indexOf(actuals[0].title) > -1, true, 'it should insert each of the expected titles: ' + titles.join(', '))
            t.strictEqual(titles.indexOf(actuals[1].title) > -1, true, 'it should insert each of the expected titles: ' + titles.join(', '))
            t.strictEqual(titles.indexOf(actuals[2].title) > -1, true, 'it should insert each of the expected titles: ' + titles.join(', '))
        }
    }
})
