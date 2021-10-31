'use strict'

const ProductInventoryRepo = require('./ProductInventoryRepo.js')

module.exports = (test) => test('320-SRP-DIP', {
  'when a productInventoryRepo is constructed with a data connection': {
    when: () => {
      const mockDb = makeMockDb()
      const repo = new ProductInventoryRepo(mockDb, makeMockLogger())
      const productId = 42

      repo.findQuantityAvailable(productId)

      return {
        productId: productId,
        dbValues: mockDb.getValues(),
      }
    },
    'it should accept a db instance': (t) => (err, actual) => {
      t.ifError(err)
      t.strictEqual(actual.dbValues.where.id, actual.productId)
      t.strictEqual(actual.dbValues.table, 'products')
      t.strictEqual(actual.dbValues.columns[0], 'quantity')
    },
  },
  'when a productInventoryRepo is constructed with a logger': {
    when: () => {
      const mockLogger = makeMockLogger()
      const repo = new ProductInventoryRepo(null, mockLogger)

      repo.findQuantityAvailable(42).catch(() => {})

      return {
        productId: 42,
        logMessage: mockLogger.getMessage(),
      }
    },
    'it should accept a db instance': (t) => (err, actual) => {
      t.ifError(err)
      t.strictEqual(actual.logMessage, 'Unable to find quantity for product ' + actual.productId)
    },
  },
})

function makeMockLogger () {
  let message

  const logger = {
    error: function (m) {
      message = m
    },
  }

  logger.getMessage = function () {
    return message
  }

  return logger
}

function makeMockDb () {
  const args = {}

  function mockDb (name) {
    const builder = new Promise(() => {})
    builder.first = function () { args.first = true; return builder }
    builder.where = function (query) { args.where = query; return builder }
    builder.column = function (cols) { args.columns = cols; return builder }

    args.table = name

    return builder
  }

  mockDb.getValues = function () {
    return args
  }

  return mockDb
}
