var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Model for a particular instance of a pet
var PetSchema = new Schema({
  name: String,
  hunger: Number,
  energy: Number,
  // A foreign-key reference to a Species
  species: {type: Schema.Types.ObjectId, ref: 'Species'}
});

mongoose.model('Pet', PetSchema);