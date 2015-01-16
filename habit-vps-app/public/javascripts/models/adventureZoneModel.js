define(function(require) {
  var Webcore = require('webcore'),
      _ = require('underscore'),
      AdventureModel = require('models/adventureModel');

  return Webcore.Model.extend({
    urlRoot: '/api/adventureZones',
    idAttribute: '_id',
    adventureModels: [],

    parse: function(response) {
      var obj = this;
      _.each(response.adventures, function(adventure) {
        obj.adventureModels.push(new AdventureModel(adventure));
      });
      return response;
    },

    getRandomAdventure: function() {
      return _.sample(this.adventureModels);
    }
  });
});