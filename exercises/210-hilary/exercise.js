'use strict';

const scope = require('hilary').scope('hilary-exercise', {
    logging: {
        level: 'off' // off|trace|debug|info|warn|error|fatal
    }
});

const bootstrap = new Promise((resolve, reject) => {
    scope.bootstrap([
        function (scope, next) {
            // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            // TODO Convert your answer to the ../110-functions/exercise.js to a hilary module



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

        const actual = scope.resolve('myIncrementorFixture');

        if (actual.isException) {
            reject(actual.error)
        }
    });
});

module.exports = { bootstrap };
