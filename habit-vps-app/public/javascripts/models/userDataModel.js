define(function(require) {
  var Backbone = require('backbone');

  return Backbone.Model.extend({
    urlRoot: '/api/userData',
    idAttribute: '_id',

    defaults: function() {
      return {
        name: 'Alex',
        points: 2,
        unlockedAdventureZones: []
      };
    }
  });
});