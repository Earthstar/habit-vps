define(function(require) {
  var Backbone = require('backbone');


  return Backbone.Model.extend({
    // hack for now. Will refactor when users are created
    // Actually, this is kind of awkward for saving
    url: function() {
      return '/api/userData';
    },

    idAttribute: '_id',

    parse: function(response) {
      return response[0];
    },

  });
});