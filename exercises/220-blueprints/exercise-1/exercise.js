'use strict';

const Blueprint = require('polyn').Blueprint;
const test = require('supposed');

var bookBlueprint,
    Book;

bookBlueprint = new Blueprint({
    __blueprintId: 'BookBlueprint',
    title: 'string',
    author: 'string',
    price: 'money',
    active: 'bool',
    custom: {
        validate: function (val, errors /*, book*/) {
            if (val !== 42) {
                errors.push('custom must be 42');
            }
        }
    }
});

Book = function (book) {
    var self = {};

    if (bookBlueprint.syncSignatureMatches(book).result !== true) {
        console.log(bookBlueprint.syncSignatureMatches(book).errors);
        throw new Error('The book argument is invalid');
    }

    self.title = book.title;
    self.author = book.author;
    self.price = book.price;
    self.active = book.active;
    self.custom = book.custom;

    return self;
};

///////////////////////////////////////////////////////////
// TEST
test({
    '(hilary-and-polyn::10-blueprints:exercise-1) Book, when a new Book is constructed': {
        when: () => {
            // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            // TODO: Refactor this constructor to get the test to pass

            var book = new Book({
                title: 42,
                author: 42,
                price: 'fail',
                active: 'fail',
                custom: 44
            });

            // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            return book;
        },
        'it should NOT throw an error if the argument is valid': (t) => (err) => {
            t.ifError(err);
        }
    }
});
