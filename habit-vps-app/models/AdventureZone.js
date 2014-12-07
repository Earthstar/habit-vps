var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AdventureZoneSchema = new Schema({
  name: String,
  pointsToUnlock: Number,
  adventures: [{
    name: String,
    // Store adventure text directly in DB, or just a key to a i18n.properties file?
    text: String,
    // If hasDrop == true, itemAdj and itemNoun must be populated
    hasDrop: Boolean,
    itemAdj: [{type: String}],
    itemNoun: [{type: String}]
  }]
});

mongoose.model('AdventureZone', AdventureZoneSchema);