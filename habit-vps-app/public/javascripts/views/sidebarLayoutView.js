define(function(require) {

  var Webcore = require('webcore'),
      templates = require('templates'),
      PetView = require('views/petView'),
      PetModel = require('models/petModel'),
      PetCollection = require('collections/petCollection'),
      AdventureSelectView = require('views/adventureSelectView'),
      AdventureButtonView = require('views/adventureButtonView'),
      AdventureZoneCollection = require('collections/adventureZoneCollection');

  return Webcore.View.extend({
    template: templates.sidebarLayout,

    events: {
    },

    petCollection: null,
    _petModel: null,
    _petView: null,
    _adventureView: null,

    initialize: function() {
      var obj = this;
      this.petCollection = new PetCollection();
      // Fetch the pet and the species
      this.petCollection.fetch()
      .then(function() {
        obj._petModel = obj.petCollection.getPet();
        obj._petModel.fetchSpecies()
        .then(function() {
          obj._petView = new PetView({
            model: obj._petModel
          });
          obj.render();
        });
      });

      this._adventureZoneCollection = new AdventureZoneCollection();
      this._adventureView = new AdventureSelectView({
        collection: this._adventureZoneCollection,
        childModel: 'model',
        childView: AdventureButtonView,
        template: templates.adventureSelect,
        childrenContainer: 'adventure-button-site'
      });
      this._adventureZoneCollection.fetch()
      .then(function() {
        obj._adventureZoneCollection.trigger('reset');
      });

      this.render();
    },

    render: function() {
      var context = {};
      this.templateRender(this.$el, this.template, context);

      this.injectView('pet-display-site', this._petView);
      this.injectView('adventure-display-site', this._adventureView);
    }

  });
});