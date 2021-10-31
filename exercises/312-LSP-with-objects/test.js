'use strict'

const Rectangle = require('./Rectangle')
const Square = require('./Square')

module.exports = (test) => test('312-LSP-with-objects', {
  'when I get the area for a rectangle': {
    when: () => {
      const height = 5; const width = 6; const rectangle = new Rectangle()

      rectangle.height = height
      rectangle.width = width

      return {
        expected: height * width,
        actual: rectangle.area(),
      }
    },
    'it should return the expected area': (t) => (err, result) => {
      t.ifError(err)
      t.strictEqual(result.actual, result.expected)
    },
  },
  'when I get the area for a square': {
    when: () => {
      const height = 5; const width = 6; const square = new Square()

      square.height = height
      square.width = width

      return {
        expected: height * width,
        actual: square.area(),
      }
    },
    'it should return the expected area': (t) => (err, result) => {
      t.ifError(err)
      t.strictEqual(result.actual, result.expected)
    },
  },
})
