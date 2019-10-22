Exercise :: Writing JavaScript Modules using IIFEs
==================================================

## The Problem

Building on the [functions exercise](../110-functions), try implementing the module pattern, by encapsulating your answer in an immediately-invoked function expression (IIFE).

By converting the function into an IIFE, it will become immediately, and globally available. The IIFE is a pattern that takes advantage of stable, native JavaScript - no third-party libraries required.

Here is an example of an IIFE:

```JavaScript
var helloWorld = (function () {
    function sayHello(name) {
        console.log('hello, ' + name);
    };

    return {
        sayHello: sayHello
    };
}());

helloWorld.sayHello('Michael');
```

## The Exercise

1. Wrap your answer to the [functions exercise](../110-functions) in round brackets `()`, and add another pair of round brackets immediately after the closing curly bracket, inside the other round brackets (i.e. `(function () {}())`). Set the output of this IIFE to a variable named `myIncrementor`.

#### Testing your Work

1. Perform the work for this exercise in the `exercise.js` file, in this directory.
2. To test your work, with a terminal prompt in the "exercises" directory, run: `node index -m 120`


## Additional Reading

* [Learning JavaScript Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book): _5. Immediately-invoked Function Expressions (IIFE)s_
* Classes are another way of encapsulating code, and are common in Strongly typed languages. They are coming to JavaScript in [ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).
