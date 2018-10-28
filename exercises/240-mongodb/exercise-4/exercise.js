'use strict';

var MongoClient = require('mongodb').MongoClient,
    connectionString = 'mongodb://localhost:27017/mongo-exercises',
    test = require('supposed');

function getDocument(db, callback) {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // TODO: Refactor this code to get one of the documents
    // in the 'books' collection, where the title equals
    // 'Dependency Injection in .NET'

    callback(new Error('I didn\'t complete this exercise yet'));

    // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}

///////////////////////////////////////////////////////////
// TEST
module.exports = test({
    '(mongodb::exercise-4) when a single document is retrieved': {
        when: () => {
            return new Promise((resolve, reject) => {
                MongoClient.connect(connectionString, function(err, db) {
                    if (err) {
                        return reject(err);
                    }

                    getDocument(db, function(err, result) {
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
        'it should be presented as the 2nd argument': (t) => (err, doc) => {
            t.ifError(err); // throws if err exists
            t.equal(typeof doc, 'object', 'it should return a document');
            t.equal(doc.title, 'Dependency Injection in .NET', 'it should return the Dependency Injection in .NET book');
        }
    }
});
