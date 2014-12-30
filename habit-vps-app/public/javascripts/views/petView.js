define(function(require) {
  var Backbone = require('backbone'),
      templates = require('templates');

  return Backbone.View.extend({
    template: templates.petStatus,
    tagName: 'petView',

    // options.model PetModel
    initialize: function(options) {
      options = options || {};
      this.listenTo(this.model, 'sync', this.render);
    },

    prepare: function() {
      console.log(this.model);
      var context = {
        pet: this.model.toJSON(),
        species: this.model.speciesModel.toJSON()
      };
      return context;
    },

    //Problem is: after the sync happens, the model isn't getting updated?
    render: function() {
      var context = this.prepare();
      this.$el.html(this.template(context));
    }
  });
});

