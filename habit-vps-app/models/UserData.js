var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Global state of the user. Placeholder for "user" data yet to be implemented
var UserDataSchema = new Schema({
  name: String,
  points: Number,
  items: [{type: Schema.Types.ObjectId, ref: 'Item'}]
});

mongoose.model('UserData', UserDataSchema);