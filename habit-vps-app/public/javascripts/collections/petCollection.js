define(function(require) {
  var Backbone = require('backbone'),
      PetModel = require('models/petModel');

  return Backbone.Collection.extend({
    url: '/api/pets',
    model: PetModel,

    getPet: function() {
      if (this.models && this.models[0]) {
        return this.models[0];
      }
      return new PetModel();
    }
  });
});