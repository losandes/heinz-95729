module.exports = (test) => test('130-argument-mutability', {
  given: () => require('./exercise'),
  'when I create a new Product': {
      when: ({ Product }) => {
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
  },
  'when I create a new Product without a payload': {
      when: ({ Product }) => {
          return new Product();
      },
      'it should not throw': (then) => (err) => {
          then.ifError(err);
      }
  },
  'when I create a new ComplexProduct': {
      when: ({ ComplexProduct }) => {
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
  },
  'when I create a new ComplexProduct without a payload': {
      when: ({ ComplexProduct }) => {
          return new ComplexProduct();
      },
      'it should not throw': (then) => (err) => {
          then.ifError(err);
      }
  }
})
