Exercise :: Writing JavaScript Modules using Hilary
===================================================

## The Problem

This exercises builds on the [IIFE exercise](https://github.com/losandes/heinz-95729-materials-2017/tree/master/week-1/20-iife). The IIFE allowed us to encapsulate our code, which allows us to keep our implementation code private. However, in a browser, `myIncrementor` is in the global scope, `Window`. Any other code can just overwrite or reset `myIncrementor` at any time.

Try implementing the module pattern, by encapsulating your answer to the [functions exercise](https://github.com/losandes/heinz-95729-materials-2017/tree/master/week-1/10-functions) in a [Hilary Module](https://github.com/losandes/hilaryjs/blob/master/docs/Getting-Started---With-Node.md#defining-arrow-functions).

Here is an example of registering a Hilary Module:

```JavaScript
scope.register({
    name: 'helloWorld',
    factory: function () {
        function sayHello(name) {
            console.log('hello, ' + name);
        };

        return {
            sayHello: sayHello
        };
    }
});
```

## The Exercise

1. Convert your answer to the [functions exercise](https://github.com/losandes/heinz-95729-materials-2017/tree/master/week-1/10-functions) into a Hilary Module
2. Make sure to name your module, `myIncrementor`

#### Testing Your Work

1. Perform the work for this exercise in the `exercise.js` file, in this directory.
2. To test your work, with a terminal prompt in this directory, run: `node exercise`

## Additional Reading

* You can learn more about HilaryJS in the [HilaryJS docs](https://github.com/losandes/hilaryjs/blob/master/docs/Getting-Started---With-Node.md)
