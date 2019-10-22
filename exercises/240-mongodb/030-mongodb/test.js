const books = {
  one: { 'title': 'Liar and Spy' },
  two: { 'title': 'Harry Potter and the Sorcerer\'s Stone' },
  three: { 'title': 'Pages Between Us'  }
}

module.exports = (test, dependencies) => test('240-030-mongodb', {
    given: () => require('./exercise'),
    'when documents are listed': {
        when: ({ listDocuments }) => new Promise((resolve, reject) => {
            dependencies.db.books().insertMany([books.one, books.two, books.three], (err) => {
                if (err) {
                    return reject(err);
                }

                listDocuments(dependencies.db.db(), (err, result) => {
                    if (err) reject(err)
                    else resolve(result)
                });
            }); // /insertMany
        }),
        'they should be returned in an array': (t) => (err, docs) => {
            var titles;

            t.ifError(err); // throws if err exists
            t.equal(docs && Array.isArray(docs), true, 'it should return an array of documents');

            titles = docs.map(function (doc) {
                return doc.title;
            });

            t.equal(titles.indexOf(books.one.title) > -1, true, `it should find ${books.one.title}`);
            t.equal(titles.indexOf(books.two.title) > -1, true, `it should find ${books.two.title}`);
            t.equal(titles.indexOf(books.three.title) > -1, true, `it should find ${books.three.title}`);
        }
    }
});
