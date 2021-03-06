const name = require('./../../_config/module/getName')(__filename)
const organelles = [
  'findByFilter',
  'findByIdPopulate',
  'findAllPopulate'
]
const molecule = {
  structure: require('./molecular.structure')
}
const organism = { name, organelles }
const DNA = { organism, molecule }

module.exports = require('./../../_factories/module')(DNA)