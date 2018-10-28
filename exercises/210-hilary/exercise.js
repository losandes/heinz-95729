'use strict';

const scope = require('hilary').scope('hilary-exercise');
const test = require('supposed');

const bootstrap = new Promise((resolve) => {
    scope.bootstrap([
        function (scope, next) {
            // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            // TODO Convert your answer to ../functions/exercise.js to a hilary module



            // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            next(null, scope);
        },
        function (scope, next) {
            scope.register({
                name: 'myIncrementorFixture',
                dependencies: ['myIncrementor'],
                factory: function (myIncrementor) {
                    var reps = 5, i, lastRep;

                    myIncrementor.resetCounter();

                    for (i = 0; i < reps; i += 1) {
                        lastRep = myIncrementor.incrementCounter();
                    }

                    resolve({
                        expected: reps,
                        actual: lastRep
                    });
                }
            });

            next(null, scope);
        }
    ], function (err) {
        if (err) {
            throw err;
        }

        scope.resolve('myIncrementorFixture');
    });
});

test({
    '(hilary-and-polyn::30-hilary) myIncrementor, when it is reset and incrementCounter is called a given number of times': {
        when: () => {
            return bootstrap;
        },
        'it should increment the count the number of times requested': (t) => (err, result) => {
            t.ifError(err);
            t.equal(result.actual, result.expected);
        }
    }
});
