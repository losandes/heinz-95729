const { factories } = require('../test-helpers')
const books = {
    book1: { title: 'Time of Hope', category: 'FICTION' },
    book2: { title: 'The Sleep of Reason', category: 'FICTION' }
}

module.exports = (test, dependencies) => test('240-100-mongodb', {
    given: () => require('./exercise'),
    'when a multiple documents are removed': {
        when: ({ deleteDocuments }) => {
            const insert = factories.insert(dependencies.db.books())
            const find = factories.find(dependencies.db.books())
            const exercise = factories.exercise(dependencies.db.db())

            return insert([books.book1, books.book2])
                .then(() => find(books.book1))
                .then((found) => exercise(deleteDocuments))
        },
        'it should indicate the number of documents that were removed': (t) => (err, results) => {
            t.ifError(err);
            t.equal(typeof results, 'object', 'it should return results');
            t.equal(results.deletedCount, 2, 'it should delete 2 documents');
        }
    }
});
