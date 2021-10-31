'use strict'

module.exports = function Rectangle () {
  let height; let width; const self = {}

  Object.defineProperty(self, 'height', {
    enumerable: true,
    get: () => {
      return height
    },
    set: (h) => {
      height = validate('height', h)
    },
  })

  Object.defineProperty(self, 'width', {
    enumerable: true,
    get: () => {
      return width
    },
    set: (w) => {
      width = validate('width', w)
    },
  })

  self.area = function () {
    return height * width
  }

  return self
}

function validate (name, num) {
  if (typeof num !== 'number' || num < 1) {
    throw new Error(`${name} must be a number greater than 0`)
  }

  return num
}
