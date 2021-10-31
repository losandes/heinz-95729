module.exports = function Product (product) {
  'use strict'

  product = Object.assign({}, product)

  return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: product.quantity,
  }
}
