define(function(require) {
  var Backbone = require('backbone'),
      AdventureZoneModel = require('models/adventureZoneModel');

  return Backbone.Collection.extend({
    url: '/api/adventureZones',
    model: AdventureZoneModel

  });
});