const {Schema, model} = require('mongoose');

const VillainSchema = Schema(
 {
  name: String,
  weakness: String,
  heroEnemy: Schema.Types.ObjectId,
  alive: {type: Boolean, default: true}
 }
)

module.exports = model('Villain', VillainSchema)