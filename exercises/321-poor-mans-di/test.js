'use strict'

module.exports = (test, dependencies) => {
  return test('321-poor-mans-di', {
    given: () => {
      const app = require('./app.js')
      const http = require('http')

      dependencies.teardown(() => {
        if (app && app.server) {
          app.server.close()
        }
      })

      return { app, http }
    },
    'when the app starts up': {
      when: ({ app }) => app,
      'it should return a server, db, logger, and port': (t) => (err, app) => {
        t.ifError(err)
        t.strictEqual(typeof app.server, 'object')
        t.strictEqual(app.port, 3000)
        t.strictEqual(typeof app.db, 'function')
        t.strictEqual(typeof app.logger, 'object')
      },
    },
    'when I make a GET request for a product': {
      when: (scope) => requestProduct(scope),
      'it should return a product': (t) => (err, { product }) => {
        t.ifError(err)
        t.strictEqual(product.id, 42)
      },
      'it should use the mock data connection': (t) => (err, { app }) => {
        t.ifError(err)
        t.strictEqual(app.db.getValues().where.id, '42')
      },
      'it should use the mock logger': (t) => (err, { app }) => {
        t.ifError(err)
        const lastMessage = app.logger.getMessages().pop()

        t.strictEqual(lastMessage.type, 'info')
        t.strictEqual(lastMessage.message, 'productRepo.get found: 42')
      },
    },
  })
}

function requestProduct ({ app, http }) {
  return new Promise((resolve) => {
    if (!app.server.listening) {
      app.server.listen(app.port)
    }

    http.get({
      host: 'localhost',
      port: 3000,
      path: '/products/42',
    }, function (res) {
      // Continuously update stream with data
      let body = ''

      res.on('data', (d) => {
        body += d
      })

      res.on('end', () => {
        resolve({ app, product: JSON.parse(body) })
        app.server.close()
      })
    })
  })
}
