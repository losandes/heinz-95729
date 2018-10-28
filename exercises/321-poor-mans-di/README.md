Exercise :: Poor Man's DI
=========================

## The Problem

In following the Dependency Inversion Principle, we eventually find ourselves at an edge. Where _do_ we construct our modules, if everything expects dependencies to be passed in?

Enter the [composition root](http://blog.ploeh.dk/2011/07/28/CompositionRoot/). The composition root is a place in our application, ideally near the entry-point, where we compose our dependency graph. There are tools to simplify this available in most languages, and often referred to as, _Inversion of Control Containers_. These obfuscate the complexity of defining a dependency graph, which can be a huge help, but it can also be hard to understand what's happening.

In this exercise, we're going to compose our dependency graph by hand. This if often referred to as _poor man's DI_, however it's the ideal way to compose dependency graphs of small applications. Why? It's easier to understand, sometimes it's faster, and it's one less dependency that our application has.

#### After completing this exercise, you should be able to:

* Use constructor injection to depend on abstractions
* Compose the dependency graph for an application by hand


## The Exercise

### Refactor `ProductRepo.js`

1. Delete all of the `const`' from the top of `ProductRepo.js`
2. Move the `DataConnection` function from `ProductRepo.js` to it's own module, `DataConnection.js` (don't forget to `module.export` it).
3. Add `data` as the first argument in `DataConnection.js`
4. Add `db` as the first argument to `ProductRepo`
5. Move the `Logger` function from `ProductRepo.js` to it's own module, `Logger.js` (don't forget to `module.export` it).
6. Add `logger` as the second argument to `ProductRepo`
7. Add `Product` as the third argument to `ProductRepo`

### Refactor `Server.js`

1. Delete all of the `const`' from the top of `Server.js`
2. Add `http`, `port`, and `productRepo` arguments to the `Server` function, in order

### Refactor `app.js`

`app.js` is our composition root. So far, we refactored modules that had dependencies, so those dependencies can be injected into them, instead of each module locating and creating it's own dependencies. Now we need to compose our dependency graph, and start the app.

1. At the top of `app.js`, load all of the external modules. You should have the following variables when you finish: `http`, `data`, `DataConnection`, `Logger`, `Product`, `ProductRepo`, and `Server` (remember: when requiring files, use `./` to tell require to look in this folder).
2. Beneath that, compose the dependency graph and environment variables. You should have the following variables when you finish: `productRepo`, `port`, `db`, `logger`. Don't forget to inject the dependencies that each module requires (Hint: the order matters, when composing the dependency graph).
3. Start the app, creating a new instance of `Server`, thereby composing its dependency graph.

#### Testing Your Work

1. To test your work, with a terminal prompt in this directory, run: `node exercise`

##### Manually Testing Your Work
You can run the app to start a server, listening on port 3000:

```
$ node app
```

Now in another terminal, you can query a product:

```Shell
$ curl http://localhost:3000/products/42
# or if you have httpie
# $ http http://localhost:3000/products/42
```

The request above should return the following product:

```JSON
{
    "id": 42,
    "name": "product 42",
    "description": "product description 42",
    "price": 1.23,
    "quantity": 42
}
```

> NOTE you can use ids between 1 and 50
