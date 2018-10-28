'use strict';

var MongoClient = require('mongodb').MongoClient,
    parallel = require('async').parallel,
    connectionString = 'mongodb://localhost:27017/mongo-exercises',
    test = require('supposed');

function makeUpdateTask1(db) {
    return function (callback) {
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // TODO: Refactor this code to update one of the documents
        // in the 'books' collection: 'Dependency Injection in .NET'.
        // Add the property, `price`, and set it to 19.00.

        callback(new Error('I didn\'t complete this exercise yet'));

        // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    };
}

function makeUpdateTask2(db) {
    return function (callback) {
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // TODO: Refactor this code to update one of the documents
        // in the 'books' collection: 'The Hitchhiker\'s Guide to the Galaxy'.
        // Add the property, `price`, and set it to 12.00.

        callback(new Error('I didn\'t complete this exercise yet'));

        // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    };
}

function makeUpdateTask3(db) {
    return function (callback) {
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // TODO: Refactor this code to update one of the documents
        // in the 'books' collection: 'The Restaurant at the End of the Universe'.
        // Add the property, `price`, and set it to 8.00.

        callback(new Error('I didn\'t complete this exercise yet'));

        // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    };
}

///////////////////////////////////////////////////////////
// TEST
module.exports = test({
    '(mongodb::exercise-6) when one document is updated': {
        when: () => {
            return new Promise((resolve, reject) => {
                MongoClient.connect(connectionString, function(err, db) {
                    if (err) {
                        return reject(err);
                    }

                    parallel([
                        makeUpdateTask1(db),
                        makeUpdateTask2(db),
                        makeUpdateTask3(db)
                    ], function (err, results) {
                        if (err) {
                            reject(err);
                            return db.close();
                        }

                        resolve(results);
                        db.close();
                    });
                });
            });
        },
        'the matchedCount should always equal 1': (t) => (err, results) => {
            t.ifError(err); // throws if err exists
            t.equal(results && Array.isArray(results), true, 'it should return an array of results');
            t.equal(results[0].matchedCount, 1, 'it should match each of the documents in the books collection');
            t.equal(results[1].matchedCount, 1, 'it should match each of the documents in the books collection');
            t.equal(results[2].matchedCount, 1, 'it should match each of the documents in the books collection');
        }
    }
});
