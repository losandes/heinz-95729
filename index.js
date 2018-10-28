'use strict';

require('./10-functions/exercise.js')
require('./20-iife/exercise.js')
require('./30-argument-mutability/exercise.js')
require('./10-hilary/exercise.js')
require('./20-blueprints/exercise-1/exercise.js')
require('./20-blueprints/exercise-2/exercise.js')
require('./30-promise-execution/exercise.js')
require('./40-mongodb/exercise-1/exercise.js')
  .then(() => { return require('./40-mongodb/exercise-2/exercise.js'); })
  .then(() => { return require('./40-mongodb/exercise-3/exercise.js'); })
  .then(() => { return require('./40-mongodb/exercise-4/exercise.js'); })
  .then(() => { return require('./40-mongodb/exercise-5/exercise.js'); })
  .then(() => { return require('./40-mongodb/exercise-6/exercise.js'); })
  .then(() => { return require('./40-mongodb/exercise-7/exercise.js'); })
  .then(() => { return require('./40-mongodb/exercise-8/exercise.js'); })
  .then(() => { return require('./40-mongodb/exercise-9/exercise.js'); })
  .then(() => { return require('./40-mongodb/exercise-10/exercise.js'); })
  .then(() => {
    require('./02-01-freezing-and-sealing/exercise.js')
    require('./02-02-open-closed/exercise.js')
    require('./03-01-LSP-with-objects/exercise.js')
    require('./05-01-SRP-DIP/exercise.js')
    // the following tests start servers on port 3000, so they
    // can't run concurrently
    require('./05-02-poor-mans-di/exercise.js')
      .then(() => { return require('./05-03-ioc-containers/exercise.js'); })
  })
