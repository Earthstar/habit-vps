define(function(require) {
  var Webcore = require('webcore'),
      templates = require('templates');

  return Webcore.View.extend({
    template: templates.adventureButton,
    adventureTemplate: templates.adventureAlert,

    events: {
      'click .btn': 'startAdventure'
    },

    // args.model AdventureZoneModel
    initialize: function(args) {
    },

    prepare: function() {
      return this.model.toJSON();
    },

    render: function() {
      var context = this.prepare();
      this.templateRender(this.$el, this.template, context);
      this.delegateEvents();
    },

    startAdventure: function() {
      var adventureModel = this.model.getRandomAdventure();
      var adventureText = this.adventureTemplate(adventureModel.toJSON());
      alert(adventureText);
    },

  });
});