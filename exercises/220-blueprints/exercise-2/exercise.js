'use strict';

const { blueprint, gt } = require('@polyn/blueprint')
let personBlueprint,
    Person,
    InvalidArgumentException;

// TODO Define the personBlueprint


// TODO Replace the primitive arguments with a single object argument
Person = function (firstName, middleName, lastName, age, active, custom) {
    var self, errors = [];

    // TODO Replace the inline guard clauses with this:
    // const validation = personBlueprint.validate(person)
    //
    // if (validation.err) {
    //   validation.err.messages = validation.messages;
    //   throw validation.err;
    // }

    if (!firstName || typeof firstName !== 'string') {
        errors.push('The firstName is required, and must be a string');
    }

    if (middleName && typeof middleName !== 'string') {
        // Note that we only validate the type, if middleName is defined.
        // That implies that middleName is NOT required. Blueprint uses `?`
        // to denote that a property is nullable. For more info see:
        // https://github.com/losandes/polyn-blueprint#types--validators

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
        throw new Error(`Invalid Person: ${errors.join(', ')}`)
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

module.exports = { Person };
