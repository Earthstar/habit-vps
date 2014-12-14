define(function(require) {
  var Backbone = require('backbone'),
      TodoModel = require('models/todoModel');

  return Backbone.Collection.extend({
    model: TodoModel,

    url: '/api/todos',

    comparator: 'order',

    nextOrder: function() {
      if (!this.length) return 1;
      return this.last().get('order') + 1;
    }
  });
});