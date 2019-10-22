const { factories } = require('../test-helpers')
const books = {
  book1: { 'title': 'The Winter Soldier', price: 8.00 },
  book2: { 'title': 'West With The Night', price: 19.00 },
  book3: { 'title': 'Stories of Eva Luna', price: 25.00 }
}

module.exports = (test, dependencies) => test('240-080-mongodb', {
    given: () => require('./exercise'),
    'when documents are queried with `less than or equal to`': {
        when: ({ findDocuments }) => {
            const insert = factories.insert(dependencies.db.books())
            const exercise = factories.exercise(dependencies.db.db())

            return insert([books.book1, books.book2, books.book3])
                .then(() => exercise(findDocuments))
        },
        'it should return an array': (t) => (err, docs) => {
            t.ifError(err);
            t.equal(docs && Array.isArray(docs), true, 'it should return an array of documents');

            const one = docs.find((doc) => doc.title === books.book1.title);
            const two = docs.find((doc) => doc.title === books.book2.title);
            const three = docs.find((doc) => doc.title === books.book3.title);

            t.strictEqual(typeof one, 'object');
            t.strictEqual(typeof two, 'undefined');
            t.strictEqual(typeof three, 'undefined');
        }
    }
});
