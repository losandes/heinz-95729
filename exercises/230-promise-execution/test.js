const NAME = 'Builder Pattern';
const DESCRIPTION = 'An anti-pattern that addresses the symptoms of other anti-patterns (the spawn of other anti-patterns)';

module.exports = (test) => test('230-promise-execution', {
  given: () => require('./exercise'),
  'Builder, when I call `build`': {
    'it should build and return an object': (t) => (err, exercise) => {
        t.ifError(err);
        t.strictEqual(typeof exercise.Builder().build, 'function', 'it should have a `build` function')

        return exercise.builder(NAME, DESCRIPTION)
            .then((actual) => {
                t.strictEqual(actual.name, NAME);
                t.strictEqual(actual.description, DESCRIPTION);
            })
    }
  },
  'AsyncBuilder, when I call `build`': {
    'it should build and return an object': (t) => (err, exercise) => {
      t.ifError(err);
      t.strictEqual(typeof exercise.AsyncBuilder().build, 'function', 'it should have a `build` function')

      return exercise.asyncBuilder(NAME, DESCRIPTION)
          .then((actual) => {
              t.strictEqual(actual.name, NAME);
              t.strictEqual(actual.description, DESCRIPTION);
          })
    }
  }
});
