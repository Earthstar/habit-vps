define(function(require) {
  var Backbone = require('Backbone'),
      ItemModel = require('models/itemModel');

  return Backbone.Collection.extend({
    model: ItemModel,
    url: '/api/items'
  });
});