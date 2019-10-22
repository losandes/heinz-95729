'use strict';

module.exports = (test, dependencies) => {
  return test('321-poor-mans-di', {
      given: () => {
        const app = require('./app.js');
        const http = require('http');

        dependencies.teardown(() => {
            if (app && app.server) {
                app.server.close();
            }
        });

        return { app, http };
      },
      'when the app starts up': {
          when: ({ app }) => app,
          'it should return a server, db, logger, and port': (t) => (err, app) => {
              t.ifError(err);
              t.equal(typeof app.server, 'object');
              t.equal(app.port, 3000);
              t.equal(typeof app.db, 'function');
              t.equal(typeof app.logger, 'object');
          }
      },
      'when I make a GET request for a product': {
          when: (scope) => requestProduct(scope),
          'it should return a product': (t) => (err, { product }) => { t.equal(product.id, 42); },
          'it should use the mock data connection': (t) => (err, { app }) => {
              t.equal(app.db.getValues().where.id, 42);
          },
          'it should use the mock logger': (t) => (err, { app }) => {
              let lastMessage = app.logger.getMessages().pop();

              t.equal(lastMessage.type, 'info');
              t.equal(lastMessage.message, 'productRepo.get found: 42');
          }
      }
  });
}

function requestProduct ({ app, http }) {
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
                resolve({ app, product: JSON.parse(body)});
                app.server.close();
            });
        });
    });
}
