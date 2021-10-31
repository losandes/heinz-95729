'use strict'

const { blueprint } = require('@polyn/blueprint')

const bookBlueprint = blueprint('BookBlueprint', {
  title: 'string',
  author: 'string',
  price: 'decimal:2',
  active: 'boolean',
  custom: ({ key, value, input, root }) => {
    if (value !== 42) {
      throw new Error('custom must be 42')
    }

    return { value }
  },
})

const Book = function (book) {
  const validation = bookBlueprint.validate(book)

  if (validation.err) {
    throw validation.err
  }

  const _book = validation.value

  const title = _book.title
  const author = _book.author
  const price = _book.price
  const active = _book.active
  const custom = _book.custom

  return { title, author, price, active, custom }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// TODO: Refactor this constructor to get the test to pass

module.exports = {
  actual: () => new Book({
    title: 42,
    author: 42,
    price: 'fail',
    active: 'fail',
    custom: 44,
  }),
}

// END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
