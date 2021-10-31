module.exports = (test) => test('210-hilary', {
  'myIncrementor, when it is reset and incrementCounter is called a given number of times': {
    given: () => require('./exercise'),
    when: (exercise) => exercise.bootstrap,
    'it should increment the count the number of times requested': (t) => (err, result) => {
      t.ifError(err)
      t.strictEqual(result.actual, result.expected)
    },
  },
})
