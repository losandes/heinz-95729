module.exports = (test) => test('110-functions', {
  'myIncrementor, when it is reset and incrementCounter is called a given number of times': {
    given: () => require('./exercise'),
    when: (exercise) => {
      const myCounter = exercise.myCounter
      const myIncrementor = myCounter()
      const reps = 5
      let lastRep

      myIncrementor.resetCounter()

      for (let i = 0; i < reps; i += 1) {
        lastRep = myIncrementor.incrementCounter()
      }

      return {
        expected: reps,
        actual: lastRep,
      }
    },
    'it should increment the count the number of times requested': (t) => (err, result) => {
      t.ifError(err)
      t.strictEqual(result.actual, result.expected)
    },
  },
})
