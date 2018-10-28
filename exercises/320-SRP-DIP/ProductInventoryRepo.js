module.exports = function ProductInventoryRepo () {
    'use strict';

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
