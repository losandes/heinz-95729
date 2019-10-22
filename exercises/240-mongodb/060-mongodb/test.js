const { factories } = require('../test-helpers')
const books = {
  book1: { 'title': 'Fly Already' },
  book2: { 'title': 'Every Tool\'s a Hammer' },
  book3: { 'title': 'The House of Broken Angels' }
}

module.exports = (test, dependencies) => test('240-060-mongodb', {
    given: () => require('./exercise'),
    'when one document is updated': {
        when: ({ makeUpdateTask1, makeUpdateTask2, makeUpdateTask3 }) => new Promise((resolve, reject) => {
            const insert = factories.insert(dependencies.db.books())
            const exercise = factories.exercise(dependencies.db.db())
            const find = factories.find(dependencies.db.books())

            return insert([books.book1, books.book2, books.book3])
                .then(() => Promise.all([
                    exercise(makeUpdateTask1),
                    exercise(makeUpdateTask2),
                    exercise(makeUpdateTask3)
                ]))
                .then((results) => Promise.all([
                    find(books.book1),
                    find(books.book2),
                    find(books.book3)
                ]).then((docs) => {
                    resolve({
                        results: results.map((result) => result.result),
                        docs: docs.map((docs) => docs[0])
                    })
                }))
        }),
        'it should modify the book records': (t) => (err, actual) => {
            t.ifError(err); // throws if err exists

            actual.results.forEach((result, idx) => {
              t.strictEqual(result.nModified, 1, 'it should modify the record');
            })
        },
        'it should update Fly Already': (t) => (err, actual) => {
            t.ifError(err); // throws if err exists
            t.strictEqual(actual.docs.find((doc) => doc.title === books.book1.title).price, 19, `it should set the price of ${books.book1.title} to 19.00`)
        },
        'it should update Every Tool\'s a Hammer': (t) => (err, actual) => {
            t.ifError(err); // throws if err exists
            t.strictEqual(actual.docs.find((doc) => doc.title === books.book2.title).price, 12, `it should set the price of ${books.book2.title} to 12.00`)
        },
        'it should update The House of Broken Angels': (t) => (err, actual) => {
            t.ifError(err); // throws if err exists
            t.strictEqual(actual.docs.find((doc) => doc.title === books.book3.title).price, 8, `it should set the price of ${books.book3.title} to 8.00`)
        }
    }
});
