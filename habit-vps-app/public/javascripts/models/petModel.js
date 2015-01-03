define(function(require) {
  var Backbone = require('backbone'),
      $ = require('jquery'),
      SpeciesModel = require('models/speciesModel');

// PetModel will store a reference to the species.
// Always get the species from the pet
  return Backbone.Model.extend({
    urlRoot: '/api/pets',
    idAttribute: '_id',

    speciesModel: null,

    // Fetches the species and triggers a sync event.
    fetchSpecies: function() {
      var obj = this,
          deferred = $.Deferred();
      // Species is unlikely to change, so can be cached
      if (!this.speciesModel) {
        this.speciesModel = new SpeciesModel({_id: this.attributes.species});
        this.speciesModel.fetch()
        .then(function() {
          obj.trigger('sync');
          deferred.resolve(obj.speciesModel);
        }, function() {
          deferred.reject(new Error('Was not able to load species'));
        });
      }
      return deferred.promise();
    },

    setSpecies: function(species) {
      this.species = species;
      this.trigger('sync');
    }
  });
});