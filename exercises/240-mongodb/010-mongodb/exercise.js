'use strict';

const MongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb://localhost:27017/mongo-exercises';

const connectToMongoDb = (callback) => {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // TODO: Refactor this code to connect to your local MongoDB instance

    callback(new Error('I didn\'t complete this exercise yet'));

    // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}

module.exports = { MongoClient, connectionString, connectToMongoDb }
