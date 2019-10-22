'use strict';

function Product (product) {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // TODO: use Object.assign or spread syntax to ensure that `product` has a value

    throw new Error('I didn\'t complete this exercise yet');
    product = product || {};

    // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    product.color = product.color || 'green';
    product.name = product.name;

    return arguments;
}

function ComplexProduct (product) {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // TODO: use spread/Object.assign, JSON.parse and JSON.stringify to ensure that
    // `product` has a value. Remember to account for the fact that
    // `product` could be null or undefined

    throw new Error('I didn\'t complete this exercise yet');
    product = product || {};

    // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    product.color = product.color || 'green';
    product.name = product.name;
    product.metadata = product.metadata || {};
    product.metadata.availableColors = product.metadata.availableColors || [];
    product.metadata.availableColors.push('red');
    product.metadata.availableColors.push('green');
    product.metadata.availableColors.push('blue');
    product.metadata.availableColors.push('yellow');

    return arguments;
}

module.exports = { Product, ComplexProduct };
