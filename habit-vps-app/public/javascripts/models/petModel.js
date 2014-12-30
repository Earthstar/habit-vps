define(function(require) {
  var Backbone = require('backbone'),
      $ = require('jquery'),
      SpeciesModel = require('models/speciesModel');

// PetModel will store a reference to the species.
// Always get the species from the pet
  return Backbone.Model.extend({
    urlRoot: '/api/pets',

    speciesModel: new SpeciesModel(),

    // Fetches the species and triggers a sync event.
    fetchSpecies: function() {
      var obj = this;
      // Species is unlikely to change, so can be cached
      if (this.speciesModel.isNew()) {
        this.speciesModel = new SpeciesModel({id: this.attributes.species});
        this.speciesModel.fetch()
        .then(function() {
          obj.trigger('sync');
        }, function() {
          return new Error('Was not able to load species');
        });
      }
    },

    setSpecies: function(species) {
      this.species = species;
      this.trigger('sync');
    }
  });
});