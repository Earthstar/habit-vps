define(function(require) {
  var Webcore = require('webcore'),
      TodoModel = require('models/todoModel');

  return Webcore.Collection.extend({
    model: TodoModel,

    url: '/api/todos',

    comparator: 'order',

    nextOrder: function() {
      if (!this.length) return 1;
      return this.last().get('order') + 1;
    }
  });
});