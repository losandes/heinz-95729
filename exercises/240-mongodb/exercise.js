'use strict';

var prompt,
    schema = {
        properties: {
            exercise: {
                description: 'Which exercise would you like to test (you can say 1 through 10, or all)?',
                pattern: /([1-9])|(10)|(all)/,
                message: 'Number must be between 1 and 10',
                required: true
            }
        }
  };

try {
    prompt = require('prompt');
} catch (e) {
    return console.log('\nYou need to run `npm install` before executing these exercises\n');
}

prompt.get(schema, function (err, res) {
    if (err) {
        return console.log(err);
    }

    if (res.exercise.toLowerCase() === 'all') {
        require('./exercise-1/exercise.js')
            .then(() => { return require('./exercise-2/exercise.js'); })
            .then(() => { return require('./exercise-3/exercise.js'); })
            .then(() => { return require('./exercise-4/exercise.js'); })
            .then(() => { return require('./exercise-5/exercise.js'); })
            .then(() => { return require('./exercise-6/exercise.js'); })
            .then(() => { return require('./exercise-7/exercise.js'); })
            .then(() => { return require('./exercise-8/exercise.js'); })
            .then(() => { return require('./exercise-9/exercise.js'); })
            .then(() => { return require('./exercise-10/exercise.js'); });
    } else {
        require('./exercise-' + res.exercise + '/exercise.js');
    }
});
