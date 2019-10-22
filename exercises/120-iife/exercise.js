'use strict';


// TODO: Refactor this code into an IIFE named, `myIncrementor`
let counter = 0;

const counterOperations = {
    incrementCounter: function () {
        return counter += 1;
    },
    resetCounter: function () {
      counter = 0;
    }
};

// TODO: uncomment the next line:
// module.exports = { myIncrementor };
