define(function(require) {
  var Backbone = require('backbone');

  return Backbone.Model.extend({
    urlRoot: '/api/items',
    defaults: function() {
      return {
        name: ''
      };
    }
  });
});