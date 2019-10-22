Exercise :: Single Responsibility & Dependency Injection
========================================================

## The Problem

In Object-Oriented (OO) programming, we often write modules or classes that depend on other modules or classes. It's common to find traditional OO techniques in use today, whereby modules demonstrate significant knowledge of the modules they depend on.

Consider the following, traditional example:

```JavaScript
// productInventoryRepo.js
module.exports = function ProductInventoryRepo () {
    const knex = require('knex');
    const nconf = require('nconf');
    const Logger = require('./Logger.js');
    const env = nconf.env()
                  .argv()
                  .file('secrets', './secrets/secrets.json')
                  .file('environment', './environment.json');
    const db = knex(env.get('db-config'));
    const logger = new Logger('productInventoryRepo');

    return {
        findQuantityAvailable: findQuantityAvailable
    };

    function findQuantityAvailable (productId) {
        try {
            return db('products')
              .first()
              .where({ id: productId})
              .column(['quantity']);
        } catch (e) {
            logger.error(`Unable to find quantity for product ${productId}`, e);
            return Promise.reject(e);
        }
    }
};
```

### This breaks the Single Responsibility Principle
This module includes at least the following responsibilities: locating dependencies, connecting to a database, reading environment configuration, instantiating Loggers, and finding the quantity of a given product. Of those responsibilities, only one meets the intention of the module's signature or output.

### This breaks the Dependency Inversion Principle
Our product inventory repository, `productInventoryRepo`, depends on `knex` to connect to and query the database, on `nconf` to read the environment configuration, and on a `Logger` module to log errors. When `productInventoryRepo` is constructed, it reads the environment configuration into a variable, creates a connection to the database, and creates a new instance of `Logger`.

This might look harmless, but this module is very difficult to test. Because it's tightly coupled to `knex`, `nconf`, and `Logger`, it is now part of the list/graph of consumers that needs to change if any of those libraries needs to be refactored, or moved.

#### After completing this exercise, you should be able to:

* Use constructor injection to depend on abstractions
* Identify responsibilities, and refactor objects, to shift responsibilities elsewhere

## The Exercise

1. Using Dependency Injection, refactor `productInventoryRepo.js` so that it is compliant with the Single Responsibility Principle. Once complete, your module should have one responsibility: finding the quantity of a given product.

#### Testing Your Work

1. To test your work, with a terminal prompt in the "exercises" directory, run: `node index -m 320`
