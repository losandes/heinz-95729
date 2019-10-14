'use strict';

const { blueprint } = require('@polyn/blueprint');

var bookBlueprint,
    Book;

bookBlueprint = blueprint('BookBlueprint', {
    title: 'string',
    author: 'string',
    price: 'decimal:2',
    active: 'boolean',
    custom: ({ key, value, input, root }) => {
      if (value !== 42) {
        throw new Error('custom must be 42')
      }

      return { value }
    }
});

Book = function (book) {
    const validation = bookBlueprint.validate(book)

    if (validation.err) {
      throw validation.err;
    }

    const _book = validation.value;

    const title = _book.title;
    const author = _book.author;
    const price = _book.price;
    const active = _book.active;
    const custom = _book.custom;

    return { title, author, price, active, custom };
};

///////////////////////////////////////////////////////////
// TEST
module.exports = (test) => test('220-blueprints-1', {
    'Book, when a new Book is constructed': {
        when: () => {
            // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            // TODO: Refactor this constructor to get the test to pass

            return new Book({
                title: 42,
                author: 42,
                price: 'fail',
                active: 'fail',
                custom: 44
            });

            // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        },
        'it should NOT throw an error if the argument is valid': (t) => (err) => {
            t.ifError(err);
        }
    }
});
