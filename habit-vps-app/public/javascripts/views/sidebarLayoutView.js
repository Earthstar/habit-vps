define(function(require) {

  var Webcore = require('webcore'),
      templates = require('templates'),
      PetView = require('views/petView'),
      PetModel = require('models/petModel'),
      PetCollection = require('collections/petCollection'),
      AdventureSelectView = require('views/adventureSelectView'),
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
      // This is bad because it prevents attaching the correct listeners?
      // this._petView = new PetView({
      //   model: this._petModel,
      // });
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
      this._adventureView = new AdventureSelectView({collection: this._adventureZoneCollection});

      this.render();
    },

    render: function() {
      var context = {};
      this.templateRender(this.$el, this.template, context);

      this.injectView('pet-display-site', this._petView);

      // this.$el.find('.adventure-display').html(this._adventureView.$el);
    }

  });
});