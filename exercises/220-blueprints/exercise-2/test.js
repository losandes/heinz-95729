module.exports = (test) => test('220-blueprints-2', {
  given: () => require('./exercise'),
  'when a valid Person is constructed': {
      when: ({ Person }) => new Person({
          firstName: 'Happy',
          middleName: 'M',
          lastName: 'Shawaa',
          age: 42,
          active: true,
          custom: 42
      }),
      'it should return a Person': (t) => (err, actual) => {
          t.ifError(err);
          t.strictEqual(actual.firstName, 'Happy');
          t.strictEqual(actual.middleName, 'M');
          t.strictEqual(actual.lastName, 'Shawaa');
          t.strictEqual(actual.age, 42);
          t.strictEqual(actual.active, true);
          t.strictEqual(actual.custom, 42);
      }
  },
  'when an invalid Person is constructed': {
      when: ({ Person }) => new Person({
          firstName: 42,
          middleName: 42,
          lastName: 42,
          age: '42',
          active: 'true',
          custom: '42'
      }),
      'it should return an Exception': (t) => (err) => {
          t.ok(typeof err !== 'undefined' && err !== null)
          t.strictEqual(err.messages.length, 6);
          t.strictEqual(err.message.startsWith('Invalid Person'), true);
      }
  }
});
