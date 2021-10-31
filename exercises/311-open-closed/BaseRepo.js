module.exports.name = 'BaseRepo'
module.exports.dendencies = []
module.exports.factory = function () {
  'use strict'

  return function BaseRepo () {
    this.data = {}
    this.ids = []
    this.list = () => {
      return Object.keys(this.data).map(key => {
        return this.data[key]
      })
    }
    this.create = (payload) => {
      payload = Object.assign({}, payload)
      payload.id = this.ids.length + 1

      this.data[payload.id] = payload
      this.ids.push(payload.id)
    }
  }
}
