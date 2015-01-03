define(function(require) {
  var Webcore = require('webcore'),
      AdventureZoneModel = require('models/adventureZoneModel');

  return Webcore.Collection.extend({
    url: '/api/adventureZones',
    model: AdventureZoneModel,

    initialize: function() {
    }

  });
});