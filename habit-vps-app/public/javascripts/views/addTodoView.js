define(function(require) {
  var Webcore = require('webcore'),
      templates = require('templates'),
      TodoModel = require('models/todoModel');

  return Webcore.View.extend({
    template: templates.addTodo,

    events: {
      'click button': 'addTodo',
    },

    // Expects a todo collection
    initialize: function() {
      this.render();
    },

    prepare: function() {
      return {};
    },

    render: function() {
      var context = this.prepare();
      this.templateRender(this.$el, this.template, context);
      this.delegateEvents();
    },

    // Adds a new todo to the collection and clears the form for the old todo
    addTodo: function(event) {
      event.preventDefault();

      var input = $('.add-todo-input');
      this.collection.create({
        title: input.val(),
        order: this.collection.nextOrder(),
        isDone: false,
        points: 1
      });
      input.val('');
    }
  });
});