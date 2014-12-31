define(function(require) {
  var Webcore = require('webcore'),
      templates = require('templates');

  return Webcore.View.extend({
    template: templates.petStatus,

    // options.model PetModel
    initialize: function(options) {
      options = options || {};
    },

    prepare: function() {
      console.log(this.model);
      var context = {
        pet: this.model.toJSON(),
        species: this.model.speciesModel.toJSON()
      };
      return context;
    },

    render: function() {
      var context = this.prepare();
      this.templateRender(this.$el, this.template, context);
    }
  });
});

