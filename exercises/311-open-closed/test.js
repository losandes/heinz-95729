'use strict';

const data = require('./data.js');
const OpenClosedModule = require('./OpenClosedModule.js').factory();
const BaseRepo = require('./BaseRepo.js').factory(OpenClosedModule);

module.exports = (test) => test('311-open-closed', {
    '(baseline) when I create a BaseRepo': {
        when: () => {
            const repo = new BaseRepo('products');
            data.products.forEach(repo.create);
            return repo;
        },
        'I should be able to create, and list records': (t) => (err, repo) => {
            // since `when` create records, success is implied
            // by being able to list them
            const actual = repo.list();
            t.equal(actual.length, 5);
        }
    },
    'BaseRepo should be "open for extension", so when I extend BaseRepo': {
        when: () => {
            const SUT = BaseRepo.extend('get', function (repo) {
                return (id) => {
                    return repo.data[id];
                };
            });

            return SUT;
        },
        'the new properties I add should be available on new instances': (t) => (err, ExtendedRepo) => {
            const repo = new ExtendedRepo('products');
            data.products.forEach(repo.create);
            const actual = repo.get(3);
            t.equal(actual.id, 3);
        }
    },
    'Instances of BaseRepo should be "closed for modification", so when I attempt to extend an instance of BaseRepo': {
        when: () => {
            const repo = new BaseRepo('products');
            repo.extend('get', function (repo) {
                return (id) => {
                    return repo.data[id];
                };
            });

            return repo;
        },
        'it should throw an error': (t) => (err) => {
            t.equal(err && err.message, 'repo.extend is not a function');
        }
    },
    'Instances of BaseRepo should be "closed for modification", so when I attempt to set an existing property on an instance of BaseRepo': {
        when: () => {
            const repo = new BaseRepo('products');
            repo.list = function () {
                return [];
            };

            return repo;
        },
        'it should throw an Error': (t) => (err) => {
            t.equal(err && err.message, `Cannot assign to read only property 'list' of object '#<Object>'`);
        }
    },
    'Instances of BaseRepo should be "closed for modification", so when I attempt to add a new property on an instance of BaseRepo': {
        when: () => {
            const repo = new BaseRepo('products');
            repo.get = function () {
                return {};
            };

            return repo;
        },
        'it should throw an Error': (t) => (err) => {
            t.equal(err && err.message, `Cannot assign to read only property 'get' of object '#<Object>'`);
        }
    },
    'Properties that are already defined on BaseRepo should be "closed for modification", so when I attempt to modify BaseRepo by extending it': {
        when: () => {
            return new Promise((resolve, reject) => {
                const SUT = BaseRepo.extend('list', function (repo) {
                    return () => {
                        return repo.data;
                    };
                });

                if (SUT.message) {
                    return reject(SUT);
                }

                resolve(BaseRepo);
            });
        },
        'it should reject the modification': (t) => (err) => {
            t.equal(err && err.message, 'A property with the name, list, already exists, and cannot be modified');
        }
    }
});
