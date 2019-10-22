'use strict';

const makeUpdateTask1 = (db) => (callback) => {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // TODO: Refactor this code to update one of the documents
    // in the 'books' collection: 'Fly Already'.
    // Add the property, `price`, and set it to 19.00.

    callback(new Error('I didn\'t complete this exercise yet'));

    // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
};

const makeUpdateTask2 = (db) => (callback) => {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // TODO: Refactor this code to update one of the documents
    // in the 'books' collection: 'Every Tool\'s a Hammer'.
    // Add the property, `price`, and set it to 12.00.

    callback(new Error('I didn\'t complete this exercise yet'));

    // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
};

const makeUpdateTask3 = (db) => (callback) => {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // TODO: Refactor this code to update one of the documents
    // in the 'books' collection: 'The House of Broken Angels'.
    // Add the property, `price`, and set it to 8.00.

    callback(new Error('I didn\'t complete this exercise yet'));

    // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
};

module.exports = { makeUpdateTask1, makeUpdateTask2, makeUpdateTask3 };
