'use strict';

const test = require('supposed');
const data = require('./data.js');
const BaseRepo = require('./BaseRepo.js').factory();
const FrozenRepo = require('./FrozenRepo.js').factory(BaseRepo);
const SealedRepo = require('./SealedRepo.js').factory(BaseRepo);
const PreventExtensionsRepo = require('./PreventExtensionsRepo.js').factory(BaseRepo);

test('(SOLID::02-01-freezing-and-sealing)', {
    'when I add a new property': {
        when: () => {
            return iEnhance(BaseRepo);
        },
        'it should add a new property to the object': itShouldAddANewProperty,
        'and that object is frozen': {
            when: () => {
                return iEnhance(FrozenRepo);
            },
            'it should throw an Error': itShouldThrowObjectIsNotExtensible
        },
        'and that object is sealed': {
            when: () => {
                return iEnhance(SealedRepo);
            },
            'it should throw an Error': itShouldThrowObjectIsNotExtensible
        },
        'and that object prevents extensions': {
            when: () => {
                return iEnhance(PreventExtensionsRepo);
            },
            'it should throw an Error': itShouldThrowObjectIsNotExtensible
        }
    },
    'when I modify an existing property': {
        when: () => {
            return iModify(BaseRepo);
        },
        'it should overwrite the property': itShouldOverwriteTheProperty,
        'and that object is frozen': {
            when: () => {
                return iModify(FrozenRepo);
            },
            'it should throw an Error': itShouldThrowCannotAssign
        },
        'and that object is sealed': {
            when: () => {
                return iModify(SealedRepo);
            },
            'it should overwrite the property': itShouldOverwriteTheProperty,
        },
        'and that object prevents extensions': {
            when: () => {
                return iModify(PreventExtensionsRepo);
            },
            'it should overwrite the property': itShouldOverwriteTheProperty,
        }
    }
});

function iEnhance(Repo) {
    var repo = prepRepo(Repo, 'products');
    repo.get = function (id) { return this.data[id]; };
    return repo;
}

function iModify(Repo) {
    var repo = prepRepo(Repo, 'products');
    repo.create = function () { return 'EVIL'; };
    return repo;
}

function itShouldAddANewProperty (t, err, actual) {
    t.ifError(err);
    t.equal(actual.get(1).id, 1);
}

function itShouldOverwriteTheProperty (t, err, actual) {
    t.ifError(err);
    t.equal(actual.create(), 'EVIL');
}

function itShouldThrowObjectIsNotExtensible (t, err) {
    t.equal(err !== null, true, 'an error should be present');
    t.equal(err.message.indexOf('object is not extensible') > -1, true);
}

function itShouldThrowCannotAssign (t, err) {
    t.equal(err !== null, true, 'an error should be present');
    t.equal(err.message.indexOf('Cannot assign to read only property') > -1, true);
}

function prepRepo (Repo, collection) {
    const repo = new Repo(collection);
    data[collection].forEach(repo.create);

    return repo;
}
