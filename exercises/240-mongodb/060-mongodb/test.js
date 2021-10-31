module.exports = (test, dependencies) => test('240-060-mongodb', {
    given: () => {
        const { makeUpdateTask1, makeUpdateTask2, makeUpdateTask3 } = require('./exercise')
        const books = {
            book1: { 'title': 'Fly Already' },
            book2: { 'title': 'Every Tool\'s a Hammer' },
            book3: { 'title': 'The House of Broken Angels' }
        }

        return { makeUpdateTask1, makeUpdateTask2, makeUpdateTask3, books }
    },
    'when one document is updated': {
        when: async ({ makeUpdateTask1, makeUpdateTask2, makeUpdateTask3, books }) => {
            await dependencies.db.books().insertMany([
                books.book1,
                books.book2,
                books.book3,
            ])
            const actuals = await Promise.all([
                makeUpdateTask1(dependencies.db.db()),
                makeUpdateTask2(dependencies.db.db()),
                makeUpdateTask3(dependencies.db.db()),
            ])
            const find = async (book) =>
                dependencies.db.books().find({ title: book.title }).toArray()
            const found = await Promise.all([
                find(books.book1),
                find(books.book2),
                find(books.book3)
            ])

            return {
                actuals,
                docs: found.map((docs) => docs[0]),
                books,
            }
        },
        'it should modify the book records': (t) => (err, result) => {
            t.ifError(err); // throws if err exists

            result.actuals.forEach((result, idx) => {
              t.strictEqual(result.modifiedCount, 1, 'it should modify the record');
            })
        },
        'it should update Fly Already': (t) => (err, result) => {
            t.ifError(err); // throws if err exists
            const { docs, books } = result
            t.strictEqual(docs.find((doc) => doc.title === books.book1.title).price, 19, `it should set the price of ${books.book1.title} to 19.00`)
        },
        'it should update Every Tool\'s a Hammer': (t) => (err, result) => {
            t.ifError(err); // throws if err exists
            const { docs, books } = result
            t.strictEqual(docs.find((doc) => doc.title === books.book2.title).price, 12, `it should set the price of ${books.book2.title} to 12.00`)
        },
        'it should update The House of Broken Angels': (t) => (err, result) => {
            t.ifError(err); // throws if err exists
            const { docs, books } = result
            t.strictEqual(docs.find((doc) => doc.title === books.book3.title).price, 8, `it should set the price of ${books.book3.title} to 8.00`)
        }
    }
});
