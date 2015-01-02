define(function(require) {
  var Webcore = require('webcore'),
      templates = require('templates');

  return Webcore.View.extend({
    template: templates.adventureButton,

    // args.model AdventureZoneModel
    initialize: function(args) {
      console.log(args);
    },

    prepare: function() {
      return this.model.toJSON();
    },

    render: function() {
      var context = this.prepare();
      this.templateRender(this.$el, this.template, context);
      console.log(this.$el.html());
    }
  });
});