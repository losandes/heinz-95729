const Server = require('./Server')

module.exports = {
  server: new Server(),
  port: undefined,
  db: undefined,
  logger: undefined,
}
