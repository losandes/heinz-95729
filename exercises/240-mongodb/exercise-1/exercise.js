'use strict';

var MongoClient = require('mongodb').MongoClient,
    connectionString = 'mongodb://localhost:27017/mongo-exercises',
    test = require('supposed');

function connectToMongoDb(callback) {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // TODO: Refactor this code to connect to your local MongoDB instance

    callback(new Error('I didn\'t complete this exercise yet'));

    // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}

///////////////////////////////////////////////////////////
// TEST
module.exports = test({
    '(mongodb::exercise-1) when MongoClient.connect succeeds': {
        when: () => {
            return new Promise((resolve, reject) => {
                connectToMongoDb(function (err, db) {
                    if (err) {
                        return reject(err);
                    }

                    resolve(db);
                    db.close();
                });
            });
        },
        'it should present a data connection as the 2nd argument': (t) => (err, db) => {
            t.ifError(err); // throws if err exists
            t.equal(typeof db, 'object');
            t.equal(typeof db.collection, 'function');
            t.equal(typeof db.databaseName, 'string');
        }
    }
});
