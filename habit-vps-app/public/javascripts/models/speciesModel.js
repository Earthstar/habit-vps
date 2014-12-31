define(function(require) {
  var Backbone = require('backbone');

  // Represents the species of a pet and intended to be used outside of a collection
  return Backbone.Model.extend({
    urlRoot: '/api/species',

  });
});