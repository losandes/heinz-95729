module.exports = function ProductRepo () {
    'use strict';

    const Product = require('./Product.js');
    const data = require('./data.js');

    const db = new DataConnection();
    const logger = new Logger('productRepo');

    return {
        get: get
    };

    function get (productId) {
        try {
            return new Promise ((resolve, reject) => {
                return db('products')
                  .first()
                  .where({ id: productId})
                  .column(['id', 'name', 'description', 'price', 'quantity'])
                  .then(doc => {
                      logger.info(`productRepo.get found: ${productId}`);
                      resolve(new Product(doc));
                  })
                  .catch(reject);
            });
        } catch (e) {
            logger.error(`productRepo.get failed with id: ${productId}`, e);
            return Promise.reject(e);
        }
    }

    function DataConnection () {
        var args = {};

        function find () {
            if (args.where && args.where.id && data[args.where.id]) {
                return data[args.where.id];
            } else {
                return null;
            }
        }

        function mockDb (name) {
            var builder = new Promise((resolve, reject) => {
                setTimeout(function () { resolve(find()); }, 0);
            });

            builder.first = function () {
                args.first = true;
                return builder;
            };

            builder.where = function (query) {
                args.where = query;
                return builder;
            };

            builder.column = function (cols) {
                args.columns = cols;
                return builder;
            };

            args.table = name;

            return builder;
        }

        mockDb.getValues = function () {
            return args;
        };

        return mockDb;
    }

    function Logger () {
        var messages = [];

        var logger = {
            info: makeAddMessage('info'),
            error: makeAddMessage('error'),
            getMessages: function () {
                return [].concat(messages);
            }
        };

        function makeAddMessage (type) {
            return function addMessage (message) {
                messages.push({
                    type: type,
                    message: message
                });
            };
        }

        return logger;
    }
};
