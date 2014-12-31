define(function(require) {
  var Backbone = require('backbone'),
      templates = require('templates'),
      AdventureButtonView = require('views/adventureButtonView');

  return Backbone.View.extend({
    template: templates.adventureSelect,

    initialize: function(options) {
      // Instantiate collection here?
      this.listenTo(this.collection, 'sync', this.render);
      this.collection.fetch();
      this.render();
    },

    prepare: function() {
      return {};
    },

    render: function() {
      var context = this.prepare();
      this.$el.html(this.template(context));

      var injectionSite = $('.adventure-buttons');
      this.collection.forEach(function(model, index, list) {
        var buttonView = new AdventureButtonView({model: model});
        injectionSite.append(buttonView.render());
      });
    }
  });
});