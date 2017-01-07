const CONFIG = require('./../_config/atoms')(__filename)
const DEFAULT = {
  ATOM_NAME: CONFIG.ATOM_NAME,
  VALIDATE_FACTORY_PATH: CONFIG.VALIDATE_FACTORY_PATH
}
const PROPS = {
  type: String
}

const atomConfig = Object.assign({}, DEFAULT, PROPS)

const Atom = require('./../_factories/atom')(atomConfig)
// console.log('Atom', Atom)
module.exports = Atom

