const { factories } = require('../test-helpers')
const books = {
    book1: { title: 'The Two Cultures and the Scientific Revolution' }
}

module.exports = (test, dependencies) => test('240-090-mongodb', {
    given: () => require('./exercise'),
    'when a single document is removed': {
        when: ({ deleteDocument }) => {
            const insert = factories.insert(dependencies.db.books())
            const exercise = factories.exercise(dependencies.db.db())

            return insert([books.book1])
                .then(() => exercise(deleteDocument))
        },
        'it should delete 1 document': (t) => (err, results) => {
            t.ifError(err);
            t.equal(typeof results, 'object', 'it should return results');
            t.equal(results.deletedCount, 1, 'it should delete 1 document');
        }
    }
});
