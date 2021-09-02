const mongoose = require('mongoose');
const villain = require('./Villain')

const HeroSchema = mongoose.Schema(
 {
  name: {type: String, required: [true, 'The name is required'], unique: [true, 'The name must be unique']},
  superPowers: [],
  secretName: String,
  enemy: mongoose.Schema.Types.ObjectId,
  weakness: String,
  age: Number
 }
)

module.exports = mongoose.model('Hero', HeroSchema)
