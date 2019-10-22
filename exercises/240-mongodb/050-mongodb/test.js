const { factories } = require('../test-helpers')
const books = {
  one: { 'title': 'The Vexations' },
  two: { 'title': 'The Familiars' },
  three: { 'title': 'Pigs in Heaven' }
}

module.exports = (test, dependencies) => test('240-050-mongodb', {
    given: () => require('./exercise'),
    'when multiple documents are updated': {
        when: ({ updateDocuments }) => new Promise((resolve, reject) => {
            const insert = factories.insert(dependencies.db.books())
            const exercise = factories.exercise(dependencies.db.db())
            const find = factories.find(dependencies.db.books())

            return insert([books.one, books.two, books.three])
                .then(() => exercise(updateDocuments))
                .then((result) => Promise.all([
                      find(books.one),
                      find(books.two),
                      find(books.three)
                  ]).then((found) => {
                      resolve({ result: result.result, found: found.map((docs) => docs[0]) });
                  }).catch(reject)
                ).catch(reject);
        }),
        'it should update documents that match the query': (t) => (err, actual) => {
            t.ifError(err); // throws if err exists
            t.strictEqual(actual.result.nModified >= 3, true, 'it should match all of the documents in the books collection');
            t.strictEqual(actual.found.find((book) => book.title === books.one.title).type, 'BOOK', `it should add the type property for ${books.one.title}`);
            t.strictEqual(actual.found.find((book) => book.title === books.two.title).type, 'BOOK', `it should add the type property for ${books.two.title}`);
            t.strictEqual(actual.found.find((book) => book.title === books.three.title).type, 'BOOK', `it should add the type property for ${books.three.title}`);
        }
    }
});
