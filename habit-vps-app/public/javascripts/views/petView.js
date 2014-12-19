define(function(require) {
  var Backbone = require('backbone'),
      Marionette = require('marionette'),
      templates = require('templates');

  return Marionette.ItemView.extend({
    template: templates.petStatus,
    tagName: 'petView',

    initialize: function() {
      console.log('petView initialized');
    }
  });
});

