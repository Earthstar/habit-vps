define(function(require) {
  var Backbone = require('backbone');

  return Backbone.Model.extend({
    urlRoot: '/api/pets',
    // defaults: function() {
    //   return {
    //     name: 'Lucifer',
    //     hunger: 5,
    //     energy: 5
    //   };
    // }
  });
});