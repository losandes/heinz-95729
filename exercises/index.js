/* eslint-disable no-console */
const supposed = require('supposed')
const teardowns = []

const inject = {
  teardown: (teardown) => teardowns.push(teardown),
}

supposed.Suite({ name: 'heinz-95729-exercises', inject })
  .runner({
    cwd: __dirname,
    matchesNamingConvention: /.(test\.js)$/i,
  })
  .run()
  .then(() => {
    teardowns.forEach(async (teardown) => await teardown())
  })
  .catch((e) => console.log(e))
