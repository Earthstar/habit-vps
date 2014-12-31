define(function(require) {
  var Backbone = require('backbone'),
      templates = require('templates');

  return Backbone.View.extend({
    template: templates.adventureButton,

    // options.model AdventureZoneModel
    initialize: function(options) {
      this.listenTo(this.model, 'sync', this.render);
    },

    prepare: function() {
      return this.model.toJSON();
    },

    render: function() {
      var context = this.prepare();
      this.$el.html(this.template(context));
    }
  });
});