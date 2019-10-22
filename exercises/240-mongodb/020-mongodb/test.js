module.exports = (test, dependencies) => test('240-020-mongodb', {
    given: () => require('./exercise'),
    'when many documents are inserted into MongoDB': {
        when: ({ insertDocuments }) => new Promise((resolve, reject) => {
            insertDocuments(dependencies.db.db(), (err, result) => {
                if (err) reject(err);
                else resolve(result);
            })
        }),
        'they should all be written': (t) => (err, actual) => {
            var titles = [
                'Dependency Injection in .NET',
                'The Hitchhiker\'s Guide to the Galaxy',
                'The Restaurant at the End of the Universe'
            ];

            t.ifError(err); // throws if err exists
            t.equal(3, actual.result.n, 'it should insert 3 records');
            t.equal(3, actual.ops.length, 'it should perform 3 operations');
            t.equal(titles.indexOf(actual.ops[0].title) > -1, true, 'it should insert each of the expected titles: ' + titles.join(', '));
            t.equal(titles.indexOf(actual.ops[1].title) > -1, true, 'it should insert each of the expected titles: ' + titles.join(', '));
            t.equal(titles.indexOf(actual.ops[2].title) > -1, true, 'it should insert each of the expected titles: ' + titles.join(', '));
        }
    }
});
