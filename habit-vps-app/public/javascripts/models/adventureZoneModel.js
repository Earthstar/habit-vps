define(function(require) {
  var Backbone = require('backbone');

  return Backbone.Model.extend({
    urlRoot: '/api/adventureZones',
    defaults: function() {
      return {
        name: 'Grassy Park',
        pointsToUnlock: 1,
        adventures: [{
          name: 'Adventure 1',
          text: 'What a cool adventure you had',
          hasDrop: false
        }]
      };
    }
  });
});