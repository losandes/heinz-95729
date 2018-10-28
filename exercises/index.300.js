'use strict';

require('./310-freezing-and-sealing/exercise.js')
require('./311-open-closed/exercise.js')
require('./312-LSP-with-objects/exercise.js')
require('./320-SRP-DIP/exercise.js')
// the following tests start servers on port 3000, so they
// can't run concurrently
require('./321-poor-mans-di/exercise.js')
  .then(() => { return require('./322-ioc-containers/exercise.js'); })
