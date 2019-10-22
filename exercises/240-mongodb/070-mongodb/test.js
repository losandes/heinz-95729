const { factories } = require('../test-helpers')
const books = {
  book1: { 'title': 'Unsheltered', price: 5.00 },
  book2: { 'title': 'The Lacuna', price: 19.00 },
  book3: { 'title': 'The Poisinwood Bible', price: 25.00 }
}

module.exports = (test, dependencies) => test('240-070-mongodb', {
    given: () => require('./exercise'),
    'when documents are queried with `greater than`': {
        when: ({ findDocuments }) => {
            const insert = factories.insert(dependencies.db.books())
            const exercise = factories.exercise(dependencies.db.db())

            return insert([books.book1, books.book2, books.book3])
                .then(() => exercise(findDocuments))
        },
        'it should return an array': (t) => (err, docs) => {
            t.ifError(err);
            t.equal(docs && Array.isArray(docs), true, 'it should return an array of documents');

            const book1 = docs.find((doc) => doc.title === books.book1.title);
            const book2 = docs.find((doc) => doc.title === books.book2.title);
            const book3 = docs.find((doc) => doc.title === books.book3.title);

            t.strictEqual(typeof book1, 'undefined', 'books less than $10 should not be returned');
            t.strictEqual(typeof book2, 'object', 'books greater than $10 should be returned');
            t.strictEqual(typeof book3, 'object', 'books greater than $10 should be returned');
        }
    }
});
