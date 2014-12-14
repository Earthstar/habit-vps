var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Global state of the user. Placeholder for "user" data yet to be implemented
var UserDataSchema = new Schema({
  name: String,
  points: {type: Number, default: 0},
  // Unlocked adventure zones are explicitly referenced
  unlockedAdventureZones: [{type: Schema.Types.ObjectId, ref: 'AdventureZone'}]
});

mongoose.model('UserData', UserDataSchema);