define(function(require) {
  var Backbone = require('backbone');

  return Bacbone.Model.extend({
    urlRoot: '/api/pets',
    defaults: function() {
      return {
        name: '',
        hunger: 0,
        energy: 0,
        species: null
      };
    }
  });
});