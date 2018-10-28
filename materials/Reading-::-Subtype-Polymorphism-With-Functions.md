It's common to use _data models_ to define the objects that we store in a database. Below is a _Book Model_, which inherits a _Product Model_. This is a simple approach to subtype polymorphism that leverages a tool called [Blueprint](https://github.com/losandes/polyn/wiki/Blueprint) to enforce type and signature.

After reading this article, you should:

* Get a glimpse of writing Hilary Modules in Node.js
* Prepare for the exercises
* Give some reasons why we cast arguments to `self`
* Ask, "What is the Liskov Substitution Principle?" - Don't worry - that's coming up

#### Why should I read these?

* These are concrete examples of a simple approach to subtype polymorphism in JavaScript
* You will start to get acquainted with patterns and models that are present in the foundations of our course project

## Product Module
The Product module is a base/generic object to represent products. It has a metadata property that can be used for, among other things, properties that are unique to a given type of product. See the Book module for a subtype polymorphism example.

In JavaScript, you can add properties to objects you might not expect you could. In our Product Module, we define a `db` property on the `Product` constructor. Note that `Product.db` is static, while the result of constructing a `Product` is not.

The `db` property on the `Product` provides instructions to our repository module, so it knows what collection to store the data in (`Product.db.collection`), and what properties should be indexed, to improve query performance (`Product.db.indexes`). Collections are to MongoDB what tables are to SQL Server.

### Casting to self
Notice that we create an object called self, and that we cast the `product` argument to it.

> Question: Why do you think we cast the product to self, instead of just returning the product if it passes the blueprint check?

```JavaScript
// Product.js
module.exports.name = 'Product';
module.exports.dependencies = ['Blueprint', 'ObjectID', 'exceptions'];
module.exports.factory = function (Blueprint, ObjectID, exceptions) {
    'use strict';

    var blueprint,
        Product;

    /*
    // This blueprint will be used to validate objects, and ensure that they
    // meet the minimum requirements for being a Product
    */
    blueprint = new Blueprint({
        _id: {
            type: 'object',
            required: false
        },
        uid: 'string',
        title: 'string',
        description: 'string',
        metadata: new Blueprint({
            keywords: {
                type: 'array',
                required: false
            }
        }),
        price: 'money',
        thumbnailLink: 'string',
        type: 'string'
    });

    /*
    // This is the Product constructor, which will be returned by this factory
    */
    Product = function (product) {
        // often times, we use selfies to provide a common object on which
        // to define properties. It's also common to see `var self = this`.
        var self = {};

        // Validate the the product argument passes muster with the Product blueprint
        if (!blueprint.syncSignatureMatches(product).result) {
            // If it doesn't, throw an argument exception
            exceptions.throwArgumentException('', 'product', blueprint.syncSignatureMatches(product).errors);
            // We don't know whether or not it will actually throw, so return undefined;
            return;
        }

        // define the Product properties from the product argument
        self._id = new ObjectID(product._id);
        self.uid = product.uid;
        self.title = product.title;
        self.description = product.description;
        self.metadata = product.metadata;
        self.price = product.price;
        self.thumbnailLink = product.thumbnailLink;
        self.type = product.type;

        return self;
    };

    /*
    // The db object is used to create and connect to the appropriate database
    // collection, which is similar to a table in relational storage.
    */
    Product.db = {
        // This is the name of the collection
        collection: 'products',
        // The indexes improve query performance
        indexes: [
            // This index enforces a unique uid, it allows multiple nulls
            // (sparse: true), although the Product model requires the uid property,
            // so a null should never be present.
            {
                keys: { name: 1 },
                options: { name: 'unq.products.uid', unique: true, sparse: true }
            },
            // This is the full-text index, which is used for searching
            // '$**' indicates that all text properties should be included
            // in the index. We allow this to process in the background,
            // for performance reasons.
            {
                keys: { '$**': 'text' },
                options: { name: 'idx.products.$text', background: true }
            },
            // Because we may filter our queries by product type, we index
            // the type property. We allow this to process in the background,
            // for performance reasons.
            {
                keys: { type: 1 },
                options: { name: 'unq.products.type', background: true }
            }
        ]
    };

    return Product;
};
```

## Book Module
The Book module demonstrates subtype polymorphism in JavaScript. Upon construction, it inherits Product by setting its own value to a new Product.

```JavaScript
//~// (removed for brevity)

    var self = new Product(book);

//~// (removed for brevity)
```

It then further validates the schema with its own Blueprint. By the time a result is returned, the constructor guarantees that the object meets the definition for both a Product and a Book.

```JavaScript
//~// (removed for brevity)

// The Product blueprint will validate the majority of the model.
// This blueprint is meant to enforce properties that are unique to Book.
blueprint = new Blueprint({
    metadata: new Blueprint({
        authors: 'array'
    })
});

//~// (removed for brevity)

    // Validate that this meets the Book schema
    if (!book || !blueprint.syncSignatureMatches(book).result) {
        exceptions.throwArgumentException('', 'book', blueprint.syncSignatureMatches(book).errors);
        return;
    }

//~// (removed for brevity)
```

```JavaScript
// Book.js
module.exports.name = 'Book';
module.exports.dependencies = ['Blueprint', 'Product', 'exceptions'];
module.exports.factory = function (Blueprint, Product, exceptions) {
    'use strict';

    var blueprint,
        Book;

    // The Product blueprint will validate the majority of the model.
    // This blueprint is meant to enforce properties that are unique to Book.
    blueprint = new Blueprint({
        metadata: new Blueprint({
            authors: 'array'
        })
    });

    Book = function (book) {
        // Inherit Product
        var self = new Product(book);

        // Validate that this meets the Book schema
        if (!book || !blueprint.syncSignatureMatches(book).result) {
            exceptions.throwArgumentException('', 'book', blueprint.syncSignatureMatches(book).errors);
            return;
        }

        return self;
    };

    return Book;
};
```


