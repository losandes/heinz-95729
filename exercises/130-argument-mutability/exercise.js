'use strict';
const test = require('supposed');

function Product (product) {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // TODO: use Object.assign to ensure that `product` has a value

    product = product || {};

    // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    product.color = product.color || 'green';
    product.name = product.name;

    return arguments;
}

function ComplexProduct (product) {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // TODO: use Object.assign, JSON.parse and JSON.stringify to ensure that
    // `product` has a value. Remember to account for the fact that
    // `product` could be null or undefined

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

// TESTS ///////////////////////////////////////////////////

test('when I create a new Product', {
    when: () => {
        const payload = { name: 'food' };
        const args = new Product(payload);

        return {
            payload: payload,
            args: args
        };
    },
    'the object that I pass as an argument should not mutate': (then) => (err, actual) => {
        then.ifError(err);
        then.equal(actual.payload.color, undefined);
    },
    'the arguments object of the Product constructor should not mutate': (then) => (err, actual) => {
        then.ifError(err);
        then.equal(Object.keys(actual.args['0']).filter(key => { return key === 'color'; }).length, 0);
    }
});

test('when I create a new Product without a payload', {
    when: () => {
        return new Product();
    },
    'it should not throw': (then) => (err) => {
        then.ifError(err);
    }
});

test('when I create a new ComplexProduct', {
    when: () => {
        const payload = {
            name: 'food',
            color: 'blue',
            metadata: {
                availableColors: ['red', 'green', 'blue']
            }
        };
        const args = new ComplexProduct(payload);

        return {
            payload: payload,
            args: args
        };
    },
    'the object that I pass as an argument should not mutate': (then) => (err, actual) => {
        then.ifError(err);
        then.equal(actual.payload.metadata.availableColors.length, 3);
    },
    'the arguments object of the Product constructor should not mutate': (then) => (err, actual) => {
        then.ifError(err);
        then.equal(actual.args['0'].metadata.availableColors.length, 3);
    }
});

test('when I create a new ComplexProduct without a payload', {
    when: () => {
        return new ComplexProduct();
    },
    'it should not throw': (then) => (err) => {
        then.ifError(err);
    }
});
