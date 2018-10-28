Exercise :: Writing JavaScript Functions
========================================

## The Problem

> The examples used in this exercise are derived from Addy Osmani's [Learning JavaScript Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book), available online for free.

The following code has a pretty serious problem. The counter variable is a global. It cannot be trusted because it can be affected by other code.

```JavaScript
var counter = 0;

var counterOperations = {
    incrementCounter: function () {
        return counter += 1;
    },
    resetCounter: function () {
      console.log( "counter value prior to reset: " + counter );
      counter = 0;
    }
};
```

## The Exercise

1. To protect this variable, encapsulate the example in a function, named `myCounter`.
2. Make sure that the function returns the `counterOperations`.

#### Testing Your Work

1. Perform the work for this exercise in the `exercise.js` file, in this directory.
2. To test your work, with a terminal prompt in this directory, run: `node exercise`

> Executing this test requires NodeJS to be installed
