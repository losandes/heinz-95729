'use strict';

var MongoClient = require('mongodb').MongoClient,
    connectionString = 'mongodb://localhost:27017/mongo-exercises',
    test = require('supposed');

function insertDocuments(db, callback) {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // TODO: Refactor this code to insert documents into the 'books'
    // collection. Each book should have a `title` property.
    // Add 3 books with the following titles:
    // 'Dependency Injection in .NET'
    // 'The Hitchhiker\'s Guide to the Galaxy'
    // 'The Restaurant at the End of the Universe'

    callback(new Error('I didn\'t complete this exercise yet'));

    // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}

///////////////////////////////////////////////////////////
// TEST
module.exports = test({
    '(mongodb::exercise-2) when many documents are inserted into MongoDB': {
        when: () => {
            return new Promise((resolve, reject) => {
                MongoClient.connect(connectionString, function(err, db) {
                    if (err) {
                        return reject(err);
                    }

                    insertDocuments(db, function(err, result) {
                        if (err) {
                            reject(err);
                            return db.close();
                        }

                        resolve(result);
                        db.close();
                    });
                });
            });
        },
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
