define(function(require) {
  var Backbone = require('backbone'),
      TodoCollection = require('todoCollection');

  return Backbone.Model.extend({
    urlRoot: '/api/todos',
    defaults: function() {
      return {
        title: 'Add new todo item',
        order: TodoCollection.nextOrder(),
        isDone: false,
        points: 1
      };
    }
  });
});