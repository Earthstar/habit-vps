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
      // force: true because templateRender isn't smart about checkbox state
      this.templateRender(this.$el, this.template, context, {force: true});
      this.delegateEvents();
    },

    toggleDone: function(event) {
      this.model.save({isDone: !this.model.get('isDone')});
    }
  });
});