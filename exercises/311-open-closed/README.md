Exercise :: Open/Closed Principle
=================================

## The Problem

JavaScript objects are not protected by default. We can add and modify the properties and functions of an object, thereby introducing side effects and mutation, which can be very hard to debug.

The built-in features that help to address this do not meet the Open/Closed Principle (i.e. [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze), [Object.seal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal), and [Object.preventExtensions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)).

This exercise has a module called `OpenClosedModule`, that provides a method of Object construction that meets the Open/Closed Principle.

#### How does it do that?

`OpenClosedModule` exports a constructor with an `extend` function on it. We can use `extend` to define the properties of a module. `extend` leaves our module signature _open for extension_, but it prohibits modification of existing properties, thereby _closing it for modification_.

`extend` accepts a first argument of _property name_, and a factory function as the second argument. The factory function accepts the instance that is being created, so our properties can access one-another (similar to using `this`).

`OpenClosedModule` freezes the instances that it creates, so they cannot be extended or modified after instantiation.

> NOTE this exercise demonstrates a way to meet the Open/Closed Principle in JavaScript, however there are negative tradeoffs to using this approach. Among them, it spreads the responsibility for defining a module across multiple files. The solution to this exercise is not meant to be used in production applications, nor to be followed, or used as a rule.

#### After completing this exercise, you should be able to:

* Enforce the Open/Closed Principle with code

## The Exercise

In this exercise, we are going to refactor `BaseRepo`, so it meets the Open/Closed Principle. After completing this exercise, read through the tests in the exercise to see example usage.

1. Add 'OpenClosedModule' as a dependency in `BaseRepo.js`
2. Add `OpenClosedModule` as an argument in BaseRepo's `factory`
3. Remove everything except for `'use strict';` from the factory
4. At the top of your factory, `return new OpenClosedModule()`
5. On the next line, extend the `OpenClosedModule`, adding a data property:

```JavaScript
.extend('data', function () { return {} })
```

6. On the line after that, add an `ids` property:

```JavaScript
.extend('ids', function () { return [] })
```

7. Now add a `list` function: (NOTE that this function accepts an instance of the repo, so it can enumerate the properties on the `data` property we added above)

```JavaScript
.extend('list', function (repo) {
    return () => {
        return Object.keys(repo.data).map(key => {
            return repo.data[key];
        });
    };
});
```

8. Finally add a `create` function:

```JavaScript
.extend('create', function (repo) {
    return (payload) => {
        payload = Object.assign({}, payload);
        payload.id = repo.ids.length + 1;

        repo.data[payload.id] = payload;
        repo.ids.push(payload.id);
    };
});
```

9. When you're done, it should look like this:

```JavaScript
module.exports.name = 'BaseRepo';
module.exports.dendencies = ['OpenClosedModule'];
module.exports.factory = function (OpenClosedModule) {
    'use strict';

    return new OpenClosedModule()
        .extend('data', function () {
            return {};
        }).extend('ids', function () {
            return [];
        }).extend('list', function (repo) {
            return () => {
                return Object.keys(repo.data).map(key => {
                    return repo.data[key];
                });
            };
        }).extend('create', function (repo) {
            return (payload) => {
                payload = Object.assign({}, payload);
                payload.id = repo.ids.length + 1;

                repo.data[payload.id] = payload;
                repo.ids.push(payload.id);
            };
        });
};
```

10. Run the tests. Now that they pass, read through the tests to gain a better understanding of how the `OpenClosedModule` changed the signature of `BaseRepo`, to make it open for extension, and closed for modification.

#### Testing Your Work

1. To test your work, with a terminal prompt in this directory, run: `node exercise`

> Executing this exercise requires NodeJS to be installed
