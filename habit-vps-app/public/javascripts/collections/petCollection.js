define(function(require) {
  var Backbone = require('backbone'),
      PetModel = require('models/petModel');

  return Backbone.Collection.extend({
    url: '/api/pets',
    model: PetModel,

    initialize: function() {
      this.listenTo(this, 'all', function(eventName) {console.log(eventName);});
    },

    getPet: function() {
      console.log('in getPet');
      if (this.models && this.models[0]) {
        return this.models[0];
      }
      return new PetModel();
    }
  });
});