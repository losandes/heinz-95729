'use strict';

var MongoClient = require('mongodb').MongoClient,
    connectionString = 'mongodb://localhost:27017/mongo-exercises',
    test = require('supposed');

function deleteDocuments(db, callback) {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // TODO: Refactor this code to delete the document where
    // the title equals, 'Dependency Injection in .NET'

    callback(new Error('I didn\'t complete this exercise yet'));

    // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}

///////////////////////////////////////////////////////////
// TEST
module.exports = test({
    '(mongodb::exercise-10) when a multiple documents are removed': {
        when: () => {
            return new Promise((resolve, reject) => {
                MongoClient.connect(connectionString, function(err, db) {
                    if (err) {
                        return reject(err);
                    }

                    deleteDocuments(db, function(err, result) {
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
        'it should indicate the number of documents that were removed': (t) => (err, results) => {
            t.ifError(err);
            t.equal(typeof results, 'object', 'it should return results');
            t.equal(results.deletedCount > 0, true, 'it should delete at least 1 document');
        }
    }
});
