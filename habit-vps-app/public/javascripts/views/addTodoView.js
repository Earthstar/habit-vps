define(function(require) {
  var Webcore = require('webcore'),
      templates = require('templates'),
      TodoModel = require('models/todoModel');

  return Webcore.View.extend({
    template: templates.addTodo,

    events: {
      'click button': 'addTodo',
      'focus input': 'printStuff'
    },

    // Expects a todo collection
    initialize: function() {
      console.log('in addTodoView initialize')
      this.render();
    },

    prepare: function() {
      return {};
    },

    render: function() {
      var context = this.prepare();
      this.templateRender(this.$el, this.template, context);

    },

    // Adds a new todo to the collection and clears the old todo
    addTodo: function(event) {
      console.log('in addTodo')
      event.preventDefault();

      var input = $('.add-todo-input');
      this.collection.create({
        title: input.val(),
        order: this.collection.nextOrder(),
        isDone: false,
        points: 1
      });
      input.val('');
    },

    printStuff: function() {
      console.log(arguments);
    }
  });
});