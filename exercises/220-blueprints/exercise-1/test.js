module.exports = (test) => test('220-blueprints-1', {
  'Book, when a new Book is constructed': {
    given: () => require('./exercise'),
    when: (exercise) => exercise.actual(),
    'it should NOT throw an error if the argument is valid': (t) => (err) => {
      t.ifError(err)
    },
  },
})
