const Schema = require('mongoose').Schema
const CONFIG = require('./../_config/atoms')(__filename)
const DEFAULT = {
  ATOM_NAME: CONFIG.ATOM_NAME,
  VALIDATE: false,
}

const PROPS = {
  type: Schema.Types.ObjectId,
  ref: 'Department'
}
const atomConfig = Object.assign({}, DEFAULT, PROPS)

const Atom = require('./../_factories/atom')(atomConfig)
// console.log('Atom', Atom)
module.exports = Atom

