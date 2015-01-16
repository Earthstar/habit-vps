define(function(require) {
  var Backbone = require('backbone');


  return Backbone.Model.extend({
    // hack for now. Will refactor when users are created
    url: function() {
      return '/api/userData';
    },

    idAttribute: '_id',

    parse: function(response) {
      console.log(response);
      return response[0];
    }

  });
});