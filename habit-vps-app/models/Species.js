var mongoose = require('mongoose');

var SpeciesSchema = new mongoose.Schema({
  name: String,
  maxHunger: Number,
  maxEnergy: Number,
  energyDecrement: {type: Number, default: 1}
});

mongoose.model('Species', SpeciesSchema);