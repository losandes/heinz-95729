'use strict';

const Rectangle = require('./Rectangle');
const Square = require('./Square');

module.exports = (test) => test('312-LSP-with-objects', {
    'when I get the area for a rectangle': {
        when: () => {
            var height = 5, width = 6, rectangle = new Rectangle();

            rectangle.height = height;
            rectangle.width = width;

            return {
                expected: height * width,
                actual: rectangle.area()
            };
        },
        'it should return the expected area': (t) => (err, result) => {
            t.ifError(err);
            t.equal(result.actual, result.expected);
        }
    },
    'when I get the area for a square': {
        when: () => {
            var height = 5, width = 6, square = new Square();

            square.height = height;
            square.width = width;

            return {
                expected: height * width,
                actual: square.area()
            };
        },
        'it should return the expected area': (t) => (err, result) => {
            t.ifError(err);
            t.equal(result.actual, result.expected);
        }
    }
});
