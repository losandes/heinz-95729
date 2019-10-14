'use strict';

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// TODO: Refactor this code into an IIFE

let counter = 0;

const counterOperations = {
    incrementCounter: function () {
        return counter += 1;
    },
    resetCounter: function () {
      counter = 0;
    }
};

// END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

module.exports = (test) => test('120-iife', {
  'myIncrementor, when it is reset and incrementCounter is called a given number of times': {
      when: () => {
          var reps = 5, i, lastRep;

          myIncrementor.resetCounter();

          for (i = 0; i < reps; i += 1) {
              lastRep = myIncrementor.incrementCounter();
          }

          return {
              expected: reps,
              actual: lastRep
          };
      },
      'it should increment the count the number of times requested': (t) => (err, result) => {
          t.ifError(err);
          t.equal(result.actual, result.expected);
      }
  }
})
