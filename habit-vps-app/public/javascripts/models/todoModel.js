define(function(require) {
  var Backbone = require('backbone');

  return Backbone.Model.extend({
    urlRoot: '/api/todos',
    idAttribute: '_id'
    // defaults: function() {
    //   return {
    //     title: 'Add new todo item',
    //     order: TodoCollection.nextOrder(),
    //     isDone: false,
    //     points: 1
    //   };
    // }
  });
});