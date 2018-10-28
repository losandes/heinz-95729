'use strict';

var MongoClient = require('mongodb').MongoClient,
    connectionString = 'mongodb://localhost:27017/mongo-exercises',
    test = require('supposed');

function updateDocuments(db, callback) {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // TODO: Refactor this code to update all of the documents
    // in the 'books' collection. Add the property, `type`,
    // and set all of their types to 'BOOK'.

    callback(new Error('I didn\'t complete this exercise yet'));

    // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}

///////////////////////////////////////////////////////////
// TEST
module.exports = test({
    '(mongodb::exercise-5) when multiple documents are updated': {
        when: () => {
            return new Promise((resolve, reject) => {
                MongoClient.connect(connectionString, function(err, db) {
                    if (err) {
                        return reject(err);
                    }

                    updateDocuments(db, function(err, result) {
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
        'it should update documents that match the query': (t) => (err, results) => {
            t.ifError(err); // throws if err exists
            t.equal(typeof results, 'object', 'it should return results');
            t.equal(results.matchedCount >= 3, true, 'it should match all of the documents in the books collection');
            // NOTE: normally, we would want to validate that the records
            // were modified. However, this test will only ever pass once
            // if we do that. Here's what the assertion might look like:
            // assert.equal(results.matchedCount, results.modifiedCount, 'it should modify each of them');
        }
    }
});
