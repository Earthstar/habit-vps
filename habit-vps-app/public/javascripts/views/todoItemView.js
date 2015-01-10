define(function(require) {
  var Webcore = require('webcore'),
      templates = require('templates');

  return Webcore.View.extend({
    template: templates.todoItem,

    events: {
      'click input': 'toggleDone'
    },

    // args.model todoModel
    initialize: function(args) {
      this.render();
    },

    prepare: function() {
      return this.model.toJSON();
    },

    render: function() {
      var context = this.prepare();
      this.templateRender(this.$el, this.template, context);
      this.delegateEvents();
    },

    toggleDone: function(event) {
      console.log('toggleDone');
      // not sure if this is the best way of doing it
      var checkbox = event.currentTarget;
      this.model.save({isDone: checkbox.checked});
    }
  });
});