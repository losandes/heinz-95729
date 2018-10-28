Exercise :: Avoiding Mutation With JavaScript Parameters
========================================================

## The Problem
When we pass arguments to JavaScript functions, objects that we pass, as well as the functions `arguments` object can mutate, depending on what that function does with the arguments.

Let's say we have a function called Product, that accepts an anonymous object as an argument:

```JavaScript
function Product (product) {
    product.color = product && product.color ? product.color : 'green';
    product.name = product ? product.name : null;

    return arguments;
}
```

Writing an if statement for each property feels a bit onerous/ verbose, so we ensure that the argument has a value before accessing any parameters:

```JavaScript
function Product (product) {
    product = product || {};
    product.color = product.color || 'green';
    product.name = product.name;

    return arguments;
}
```

When I create an instance of `Product` without a color (i.e. `new Product({ name: 'food' })`), the argument that I pass to the constructor will mutate, as will Product's `arguments`. A property named `color`, with a value of `green` will be added to each. This mutation is an undesirable side-effect, which can cause unexpected, and hard-to-debug problems for the caller.

## The Exercise
The exercise has 2 constructors in it: `Product` and `ComplexProduct`. Each cause their arguments to mutate.

1. In `Product`, stop mutation from occurring by replacing `product = product || {};` with [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).
2. In `ComplexProduct`, stop mutation from occurring by replacing `product = product || {};` with a combination of [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse), and [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

#### Testing your Work

1. Perform the work for this exercise in the `exercise.js` file, in this directory.
2. To test your work, with a terminal prompt in this directory, run: `node exercise`
