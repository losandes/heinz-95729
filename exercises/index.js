const suite = require('supposed').Suite({ name: 'heinz-95729-exercises'})

suite.runner({
  cwd: __dirname,
  matchesNamingConvention: /.(exercise\.js)$/i,
}).run()
