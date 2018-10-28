Exercise :: Inversion of Control Containers
===========================================

## The Problem

In the _Poor Man's DI_ exercise, we learned how to compose our dependency graph by hand. This is ideal for small applications, but what if we have a large dependency graph? Composing more than 20 modules can become difficult and hard to maintain.

To ease the pain, we can use an _Inversion of Control Container_, or IOC Container. Many exist, but for this exercise, we're going to use [hilary](https://github.com/losandes/hilaryjs), which I designed for simplicity and for teaching the Dependency Inversion Principle.

#### After completing this exercise, you should be able to:

* Compose the dependency graph for an application, using an IOC Container


## The Exercise

### Refactor the Modules
1. Copy your refactored code/answer from the _Poor Man's DI_ exercise, and paste it in this directory
2. Refactor `data.js`, so the module exports the following properties: `name`, and `factory`.
Set the name to, "data". Set the factory to the current export.
3. Refactor `DataConnection.js`, so the module exports the following properties: `name`, and `factory`. Set the name to, "db". Set the factory to the current export. Rename the file to `db.js`.
4. Refactor `Logger.js`, so the module exports the following properties: `name`, and `factory`. Set the name to, "logger". Set the factory to the current export. Rename the file to `logger.js`.
5. Refactor `Product.js`, so the module exports the following properties: `name`, `dependencies`, and `factory`. Set the name to, "Product". Set the factory to the current export. Set the dependencies to `false`.
6. Refactor `ProductRepo.js`, so the module exports the following properties: `name`, and `factory`. Set the name to, "productRepo". Set the factory to the current export. Rename the file to `productRepo.js`.
7. Refactor `Server.js`, so the module exports the following properties: `name`, and `factory`. Set the name to, "Server". Set the factory to the current export.

### Refactor the Composition Root

> NOTE It might be helpful to refer to [hilary documentation](https://github.com/losandes/hilaryjs/blob/master/docs/Getting-Started---With-Node.md) for this section

1. At the top of `app.js`, create a hilary scope: `const scope = require('hilary').scope('myApp');`.
2. Below that, use hilary's `bootstrap` feature to start your app: ` scope.bootstrap([], (err, scope) => {})`.
3. Register all of your modules, by adding tasks to the bootstrap array argument  (i.e. `scope.makeRegistrationTask(require('./data.js'))`). Make sure you include all of the modules from Step 1 of the _Poor Man's DI_ exercise.
4. Add another task to the bootstrap array argument. The syntax for a task is: `(scope, next) => { next(null, scope) }`.
5. Before the call to `next` in that task, register a module named "port", and set the factory to 3000.
6. In the bootstrap finally argument (i.e. `(err, scope) => {}`), register a module named "server", and set the factory to `scope.resolve('Server')` (note the case difference between _server_ and _Server_). Doing this starts the app, and makes the product of _Server_ available for other modules, such as `exercise.js`.
7. Finally, after the bootstrap function, export the scope: `module.exports = scope`

## Testing Your Work

1. To test your work, with a terminal prompt in this directory, run: `node exercise`

## Extra Challenge

Once your tests pass, you have experience composing an application dependency with an IOC container. Does it feel a bit like magic? If you want a deeper understanding of how IOC containers work, try this extra challenge.

1. Copy your answer for this exercise to a new folder. We're going to leave all of the files the same, except for `app.js`.
2. Start with a blank app.js and add the following:

```JavaScript
const factories = [];
const container = {};
const resolved = {};
```

3. Now follow Step 1 of the _Poor Man's DI_ exercise, except instead of setting each module to a variable, just add the value of `require` to `factories` (i.e. `const factories = [require('./data'), ...]`
4. Add an http module to `factories` (i.e. `factories.push({ name: 'http', factory: require('http') })`
5. Add the port module to `factories` (i.e. `factories.push({ name: 'port', factory: 3000 })`
6. Write a function that lists the argument names of a given function (hint: You can find an example in [polyn](https://github.com/losandes/polyn/blob/master/src/objectHelper.js#L167) (Read step 7 before writing this)
7. Enumerate the `factories`. For each, if the `factory` is a function that accepts arguments, and the `dependencies` are not defined (remember `false` is defined), add a `dependencies` array, with the argument names as it's values. (Alternatively, modify each module that accepts arguments and doesn't have `dependencies: false`, adding the dependencies arrays by hand). Place the resulting object on `container`, by name (i.e. `container[item.name] = item`)
8. Write a function that enumerates the objects on `container`, and executes the factory for each module. If the module has dependencies, make sure you resolve those dependencies, and `apply` them to the factory that is being executed.
