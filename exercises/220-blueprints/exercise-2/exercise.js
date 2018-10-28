'use strict';

const Blueprint = require('polyn').Blueprint;
const test = require('supposed');

var personBlueprint,
    Person,
    InvalidArgumentException;

// TODO Define the personBlueprint

// TODO Replace the primitive arguments with a single object argument
Person = function (firstName, middleName, lastName, age, active, custom) {
    var self, errors = [];

    // TODO Replace these inline guard clauses with this:
    // if (!personBlueprint.syncSignatureMatches(person).result) {
    //     return new InvalidArgumentException(
    //         personBlueprint.syncSignatureMatches(person).errors
    //     );
    // }

    if (!firstName || typeof firstName !== 'string') {
        errors.push('The firstName is required, and must be a string');
    }

    if (middleName && typeof middleName !== 'string') {
        // Note that we only validate the type, if middleName is defined.
        // That implies that middleName is NOT required. Look at the
        // `nullable` property on the Blueprint example for an example:
        // https://github.com/losandes/hilaryjs/wiki/Blueprint#blueprint

        // Do you think it's easy to overlook the fact that this property
        // is not required when reading this code?

        errors.push('The middleName must be a string');
    }

    if (!lastName || typeof lastName !== 'string') {
        errors.push('The lastName is required, and must be a string');
    }

    if (!age || typeof age !== 'number') {
        errors.push('The age is required, and must be a number');
    }

    if (active === null || typeof active !== 'boolean') {
        errors.push('active is required, and must be a boolean');
    }

    if (custom !== 42) {
        errors.push('custom is required and must be 42');
    }

    if (errors.length) {
        return new InvalidArgumentException(errors);
    }

    self = {
        firstName: person.firstName,
        middleName: person.middleName,
        lastName: person.lastName,
        age: person.age,
        active: person.active,
        custom: person.custom
    };

    return self;
};

InvalidArgumentException = function (errors) {
    var messages = [];

    if (Array.isArray(errors)) {
        messages = errors;
    } else {
        messages.push(errors);
    }

    return {
        isException: true,
        type: 'InvalidArgumentException',
        messages: messages
    };
};


///////////////////////////////////////////////////////////
// TEST
test({
    '(hilary-and-polyn::10-blueprints:exercise-2) Person, when a valid Person is constructed': {
        when: () => {
            return new Promise((resolve, reject) => {
                var person = new Person({
                    firstName: 'Happy',
                    middleName: 'M',
                    lastName: 'Shawaa',
                    age: 42,
                    active: true,
                    custom: 42
                });

                if (person.isException) {
                    return reject(person);
                }

                return resolve(person);
            });
        },
        'it should return a Person': (t) => (err, actual) => {
            t.ifError(err);
            t.equal(actual.firstName, 'Happy');
            t.equal(actual.middleName, 'M');
            t.equal(actual.lastName, 'Shawaa');
            t.equal(actual.age, 42);
            t.equal(actual.active, true);
            t.equal(actual.custom, 42);
        }
    },
    'Person, when an invalid Person is constructed': {
        when: () => {
            return new Promise((resolve, reject) => {
                var person = new Person({
                    firstName: 42,
                    middleName: 42,
                    lastName: 42,
                    age: '42',
                    active: 'true',
                    custom: '42'
                });

                if (person.isException) {
                    return reject(person);
                }

                return resolve(person);
            });
        },
        'it should return an Exception': (t) => (err) => {
            t.equal(err.isException, true);
            t.equal(err.messages.length, 6);
        }
    }
});
