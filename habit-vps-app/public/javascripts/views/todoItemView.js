define(function(require) {
  var Webcore = require('webcore'),
      templates = require('templates');

  return Webcore.View.extend({
    template: templates.todoItem,

    // args.model todoModel
    initialize: function(args) {
      console.log(args.model);
      this.render();
    },

    prepare: function() {
      return this.model.toJSON();
    },

    render: function() {
      var context = this.prepare();
      this.templateRender(this.$el, this.template, context);
    }
  });
});