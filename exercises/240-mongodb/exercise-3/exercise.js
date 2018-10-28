'use strict';

var MongoClient = require('mongodb').MongoClient,
    connectionString = 'mongodb://localhost:27017/mongo-exercises',
    test = require('supposed');

function listDocuments(db, callback) {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // TODO: Refactor this code to list all of the documents
    // in the 'books' collection

    callback(new Error('I didn\'t complete this exercise yet'));

    // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}

///////////////////////////////////////////////////////////
// TEST
module.exports = test({
    '(mongodb::exercise-3) when documents are listed': {
        when: () => {
            return new Promise((resolve, reject) => {
                MongoClient.connect(connectionString, function(err, db) {
                    if (err) {
                        return reject(err);
                    }

                    listDocuments(db, function(err, result) {
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
        'they should be returned in an array': (t) => (err, docs) => {
            var titles;

            t.ifError(err); // throws if err exists
            t.equal(docs && Array.isArray(docs), true, 'it should return an array of documents');

            titles = docs.map(function (doc) {
                return doc.title;
            });

            t.equal(titles.indexOf('Dependency Injection in .NET') > -1, true, 'it should find Dependency Injection in .NET');
            t.equal(titles.indexOf('The Hitchhiker\'s Guide to the Galaxy') > -1, true, 'it should find The Hitchhiker\'s Guide to the Galaxy');
            t.equal(titles.indexOf('The Restaurant at the End of the Universe') > -1, true, 'it should find The Restaurant at the End of the Universe');
        }
    }
});
