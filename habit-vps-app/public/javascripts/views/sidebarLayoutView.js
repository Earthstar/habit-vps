define(function(require) {

  var Backbone = require('backbone'),
      templates = require('templates'),
      PetView = require('views/petView'),
      PetModel = require('models/petModel'),
      PetCollection = require('collections/petCollection'),
      AdventureSelectView = require('views/adventureSelectView'),
      AdventureZoneCollection = require('collections/adventureZoneCollection');

  return Backbone.View.extend({
    template: templates.sidebarLayout,

    events: {
    },

    petCollection: null,
    _petModel: new PetModel(),
    _petView: null,
    _adventureView: null,

    initialize: function() {
      var obj = this;
      this.petCollection = new PetCollection();
      this.listenTo(this.petCollection, 'sync', this.render);
      this._petView = new PetView({
        model: this._petModel,
      });
      // Fetch the pet and the species
      this.petCollection.fetch()
      .then(function() {
        obj._petModel = obj.petCollection.getPet();
        obj._petModel.fetchSpecies();
        obj._petView = new PetView({
          model: obj._petModel
        });
      });

      this._adventureZoneCollection = new AdventureZoneCollection();
      this._adventureView = new AdventureSelectView({collection: this._adventureZoneCollection});

      this.render();
    },

    render: function() {
      var context = {};
      this.$el.html(this.template(context));

      // Should already have rendered
      this.$el.find('.pet-display').html(this._petView.$el);

      // this.$el.find('.adventure-display').html(this._adventureView.$el);
    }

  });
});