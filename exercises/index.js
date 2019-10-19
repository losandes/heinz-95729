const teardowns = []
const suite = require('supposed').Suite({
  name: 'heinz-95729-exercises',
  inject: {
    teardown: (teardown) => teardowns.push(teardown)
  }
})

suite.runner({
  cwd: __dirname,
  matchesNamingConvention: /.(test\.js)$/i,
}).run()
  .then(() => {
    teardowns.forEach((teardown) => teardown())
  })
