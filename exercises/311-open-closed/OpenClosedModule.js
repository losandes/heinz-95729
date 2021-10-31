module.exports.name = 'OpenClosedModule'
module.exports.factory = () => {
  'use strict'

  return function () {
    const propertyNames = []
    const extensions = {}

    function OpenClosed () {
      const self = {}

      propertyNames.forEach(name => {
        self[name] = extensions[name](self)
      })

      Object.freeze(self)
      return self
    }

    OpenClosed.extend = function (name, factory) {
      if (typeof name !== 'string') {
        return new Error('extend expects a string name for the property as the first argument')
      }

      if (typeof factory !== 'function') {
        return new Error('extend expects a function factory as the second argument')
      }

      if (propertyNames.indexOf(name) > -1) {
        return new Error(`A property with the name, ${name}, already exists, and cannot be modified`)
      }

      propertyNames.push(name)
      extensions[name] = factory

      return OpenClosed
    }

    return OpenClosed
  }
}
