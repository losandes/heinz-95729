Exercise :: Promise Execution
=============================

## The Problem
Both the way we define Promises, and the difference in how Promises are processed in other languages / libraries can lead to confusion. Sometimes Promises express the series of events in a manner that is easy to understand, but they can easily be misread, and/or express a series of events that in no way describes an actual process.

To illustrate this problem, we're going to use the [Builder Pattern](https://en.wikipedia.org/wiki/Builder_pattern). The builder pattern produces a complex, fluent approach to constructing objects, and is considered by many to be an anti-pattern. Such is often the result when we design patterns that address the symptoms of other anti-patterns, or problems that are out of our control. Regardless of where you stand on pattern / anti-pattern, it's a very common pattern you will come into contact with at some point, if you haven't already.

Our first builder is a synchronous builder. It returns a Promise with a fluent API that lets us set the name and description of an object. We expect calling `then` will produce output with the name and description that we give it.

```JavaScript
function Builder () {
    var output = {
        name: null,
        description: null
    };

    var builder = new Promise((resolve) => {
        resolve(Object.assign({}, output));
    });

    builder.name = (name) => {
        output.name = name;
        return builder;
    };

    builder.description = (description) => {
        output.description = description;
        return builder;
    };

    return builder;
}
```

Our second builder is an asynchronous builder with the same API:

```JavaScript
var output = {
    name: null,
    description: null
};

var builder = new Promise((resolve) => {
    setTimeout(() => {
        resolve(Object.assign({}, output));
    }, 0);
});

builder.name = (name) => {
    output.name = name;
    return builder;
};

builder.description = (description) => {
    output.description = description;
    return builder;
};

return builder;
```

We call them both in the same way:

```JavaScript
const builder = new Builder(); // or new AsyncBuilder()

builder
    .name('Hello World!')
    .description('This is a fluent API, referred to as the builder pattern')
    .then(result => {
        console.log(result);    
    });
```

Because the APIs for both builders are the same, and we access them the same way, they both express the same intent. However, because Promises execute immediately, and due to the nature of the V8 event loop in nodejs, these examples produce completely different results:

> The synchronous builder produces a `null` result, while the asynchronous builder produces the object you would expect.

Can you explain why the produce different results?

## The Exercise
Refactor both of the builders, and both tests, to move the Promises into a function called, `build`. Why? So we can gain control of when the Promise executes. Both builders will still have the same API, but by controlling when the Promise executes, we improve the likelihood that `then` will produce the expected result.

> Note the use of the word "improve". Why is the result still not guaranteed? Fluent APIs, and builder patterns produce a large combination of possible outcomes. To guarantee consistent output, we must also validate that all required conditions are met.

1. In both `Builder` and `AsyncBuilder`, replace the builder declaration with an empty object, and return the existing Promise from a new `builder.build` function.
2. Update both of the tests, so they call `build`, immediately before they call `then`.

#### Testing your Work

1. Perform the work for this exercise in the `exercise.js` file, in this directory.
2. To test your work, with a terminal prompt in this directory, run: `node exercise`
