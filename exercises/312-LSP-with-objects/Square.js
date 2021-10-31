'use strict'

const Rectangle = require('./Rectangle.js')

module.exports = function Square () {
  const rectangle = new Rectangle()
  const self = Object.assign({}, rectangle)

  Object.defineProperty(self, 'height', {
    enumerable: true,
    get: () => {
      return rectangle.height
    },
    set: (h) => {
      rectangle.height = h
      rectangle.width = h
    },
  })

  Object.defineProperty(self, 'width', {
    enumerable: true,
    get: () => {
      return rectangle.width
    },
    set: (w) => {
      rectangle.height = w
      rectangle.width = w
    },
  })

  return self
}
