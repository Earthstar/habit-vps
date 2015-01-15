define(function(require) {
  var Backbone = require('backbone'),
      ItemModel = require('models/itemModel');

  return Backbone.Collection.extend({
    model: ItemModel,
    url: '/api/items',
    initialize: function() {
      console.log('in itemCollection initialize');
    }
  });
});