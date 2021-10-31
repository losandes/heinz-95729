'use strict'

// TODO: Refactor this code into an IIFE named, `myIncrementor`
let counter = 0

const counterOperations = {
  incrementCounter: () => (counter += 1),
  resetCounter: () => (counter = 0),
}

// TODO: uncomment the next line:
// module.exports = { myIncrementor };
