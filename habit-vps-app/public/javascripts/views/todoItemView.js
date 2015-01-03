define(function(require) {
  var Webcore = require('webcore'),
      templates = require('templates');

  return Webcore.View.extend({
    template: templates.todoItem,

    events: {
      'click input': 'print'
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

    print: function(event) {
      console.log(event);
    }
  });
});