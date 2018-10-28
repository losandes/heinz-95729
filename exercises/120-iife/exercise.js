'use strict';

const test = require('supposed');

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// TODO: Refactor this code into an IIFE

var counter = 0;

var counterOperations = {
    incrementCounter: function () {
        return counter += 1;
    },
    resetCounter: function () {
      counter = 0;
    }
};

// END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


test({
    '(JavaScript::20-iife) myIncrementor, when it is reset and incrementCounter is called a given number of times': {
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
});
