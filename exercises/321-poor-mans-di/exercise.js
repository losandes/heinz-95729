'use strict';

const test = require('supposed');
const app = require('./app.js');
const http = require('http');

module.exports = test('(SOLID::05-02-poor-mans-di)', {
    'when the app starts up': {
        when: () => { return app; },
        'it should return a server, db, logger, and port': (t) => (err, app) => {
            t.ifError(err);
            t.equal(typeof app.server, 'object');
            t.equal(app.port, 3000);
            t.equal(typeof app.db, 'function');
            t.equal(typeof app.logger, 'object');
        }
    },
    'when I make a GET request for a product': {
        when: requestProduct,
        'it should return a product': (t) => (err, product) => { t.equal(product.id, 42); },
        'it should use the mock data connection': t => { t.equal(app.db.getValues().where.id, 42); },
        'it should use the mock logger': t => {
            let lastMessage = app.logger.getMessages().pop();

            t.equal(lastMessage.type, 'info');
            t.equal(lastMessage.message, 'productRepo.get found: 42');
        }
    }
}).then(() => {
    if (app && app.server) {
        app.server.close();
    }
});

function requestProduct () {
    return new Promise((resolve) => {
        if (!app.server.listening) {
            app.server.listen(app.port);
        }

        http.get({
            host: 'localhost',
            port: 3000,
            path: '/products/42'
        }, function (res) {
            // Continuously update stream with data
            var body = '';

            res.on('data', (d) => {
                body += d;
            });

            res.on('end', () => {
                resolve(JSON.parse(body));
                app.server.close();
            });
        });
    });
}
