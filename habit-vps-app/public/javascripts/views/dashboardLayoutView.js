define(function(require) {

  var Marionette = require('marionette'),
      templates = require('templates'),
      PetView = require('views/petView'),
      PetModel = require('models/petModel');

  return Marionette.LayoutView.extend({
    template: templates.dashboardLayout,

    events: {
    },

    regions: {
      petDisplay: '.pet-display',
      todoDisplay: '.todo-display'
    },

    initialize: function() {
      console.log('in dashboard initialize');
    },

    // onRender will be called when the view is rendered, but the view may not be attached to the dom yet
    onRender: function() {
      console.log('dashboard onRender');
      this.petDisplay.show(new PetView({
        model: new PetModel({
          name: 'Jake',
          hunger: 5,
          energy: 5
        })
      }));
    },

  });
});