const books = {
  one: { 'title': 'The Dutch House' }
}

module.exports = (test, dependencies) => test('240-040-mongodb', {
    given: () => require('./exercise'),
    'when a single document is retrieved': {
        when: ({ getDocument }) => new Promise((resolve, reject) => {
            dependencies.db.books().insertMany([books.one], (err) => {
                if (err) {
                    return reject(err);
                }

                getDocument(dependencies.db.db(), (err, result) => {
                    if (err) reject(err)
                    else resolve(result)
                });
            }); // /insertMany
        }),
        'it should be presented as the 2nd argument': (t) => (err, doc) => {
            t.ifError(err); // throws if err exists
            t.equal(typeof doc, 'object', 'it should return a document');
            t.equal(doc.title, books.one.title, `it should return the ${books.one.title} book`);
        }
    }
});
