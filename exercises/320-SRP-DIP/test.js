'use strict';

const ProductInventoryRepo = require('./ProductInventoryRepo.js');

module.exports = (test) => test('320-SRP-DIP', {
    'when a productInventoryRepo is constructed with a data connection': {
        when: () => {
            let mockDb = makeMockDb();
            let repo = new ProductInventoryRepo(mockDb, makeMockLogger());
            let productId = 42;

            repo.findQuantityAvailable(productId);

            return {
                productId: productId,
                dbValues: mockDb.getValues()
            };
        },
        'it should accept a db instance': (t) => (err, actual) => {
            t.ifError(err);
            t.equal(actual.dbValues.where.id, actual.productId);
            t.equal(actual.dbValues.table, 'products');
            t.equal(actual.dbValues.columns[0], 'quantity');
        }
    },
    'when a productInventoryRepo is constructed with a logger': {
        when: () => {
            let mockLogger = makeMockLogger();
            let repo = new ProductInventoryRepo(null, mockLogger);

            repo.findQuantityAvailable(42).catch(() => {});

            return {
                productId: 42,
                logMessage: mockLogger.getMessage()
            };
        },
        'it should accept a db instance': (t) => (err, actual) => {
            t.ifError(err);
            t.equal(actual.logMessage, 'Unable to find quantity for product ' + actual.productId);
        }
    }
});

function makeMockLogger () {
    var message;

    var logger = {
        error: function (m) {
            message = m;
        }
    };

    logger.getMessage = function () {
        return message;
    };

    return logger;
}

function makeMockDb () {
    var args = {};

    function mockDb (name) {
        var builder = new Promise(() => {});
        builder.first = function () { args.first = true; return builder; };
        builder.where = function (query) { args.where = query; return builder; };
        builder.column = function (cols) { args.columns = cols; return builder; };

        args.table = name;

        return builder;
    }

    mockDb.getValues = function () {
        return args;
    };

    return mockDb;
}
