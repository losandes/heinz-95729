'use strict';

var MongoClient = require('mongodb').MongoClient,
    connectionString = 'mongodb://localhost:27017/mongo-exercises',
    test = require('supposed');

function deleteDocument(db, callback) {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // TODO: Refactor this code to delete the document where
    // the title equals, 'Dependency Injection in .NET'

    callback(new Error('I didn\'t complete this exercise yet'));

    // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}

///////////////////////////////////////////////////////////
// TEST
module.exports = test({
    '(mongodb::exercise-9) when a single document is removed': {
        when: () => {
            return new Promise((resolve, reject) => {
                MongoClient.connect(connectionString, function(err, db) {
                    if (err) {
                        return reject(err);
                    }

                    deleteDocument(db, function(err, result) {
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
        'it should delete 1 document': (t) => (err, results) => {
            t.ifError(err);
            t.equal(typeof results, 'object', 'it should return results');
            t.equal(results.deletedCount, 1, 'it should delete 1 document');
        }
    }
});
