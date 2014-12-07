var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Represents an item that a User can own
var ItemSchema = new Schema({
  name: String
});

mongoose.model('Item', ItemSchema);