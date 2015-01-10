define(function(require) {
  var Webcore = require('webcore'),
      _ = require('underscore'),
      templates = require('templates'),
      ChangingListView = require('views/changingListView'),
      TodoCollection = require('collections/todoCollection'),
      TodoItemView = require('views/todoItemView'),
      AddTodoView = require('views/addTodoView');

  return Webcore.View.extend({
    template: templates.todoLayout,

    initialize: function() {
      var obj = this;
      // problem: only one model is showing up?
      this._todoCollection = new TodoCollection();

      this._unfinishedTodosView = new ChangingListView({
        collection: this._todoCollection,
        childModel: 'model',
        childView: TodoItemView,
        // This view only shows todos that are not done
        modelsToRender: function() {
          console.log("in unfinished todos modelsToRender");
          console.log(obj._todoCollection.filter(function(model) {
            return model.get('isDone') === false;
          }))
          return obj._todoCollection.filter(function(model) {
            return model.get('isDone') === false;
          });
        }
      });
      this._doneTodosView = new ChangingListView({
        collection: this._todoCollection,
        childModel: 'model',
        childView: TodoItemView,
        modelsToRender: function() {
          // Models To Render is producing the expected number of models, but why isn't the new one being rendered?
          console.log("in unfinished todos modelsToRender");
          console.log(obj._todoCollection.filter(function(model) {
            return model.get('isDone') === true;
          }))
          return obj._todoCollection.filter(function(model) {
            return model.get('isDone') === true;
          });
        }
      });

      this._addTodoView = new AddTodoView({collection: this._todoCollection});
      this._todoCollection.fetch();
      this.render();
    },

    prepare: function() {
      return {};
    },

    render: function() {
      var context = this.prepare();
      this.templateRender(this.$el, this.template, context);

      this.injectView('unfinished-todo-site', this._unfinishedTodosView);
      this.injectView('add-todo-site', this._addTodoView);
      this.injectView('done-todo-site', this._doneTodosView);
      this.delegateEvents();
    },
  });
});