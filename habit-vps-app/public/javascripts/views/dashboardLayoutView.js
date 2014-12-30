define(function(require) {

  var Backbone = require('backbone'),
      templates = require('templates'),
      PetView = require('views/petView'),
      PetModel = require('models/petModel'),
      SpeciesModel = require('models/speciesModel'),
      PetCollection = require('collections/petCollection');

  return Backbone.View.extend({
    template: templates.dashboardLayout,

    events: {
    },

    petCollection: null,
    _petModel: new PetModel(),
    _petView: null,

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
      this.render();
    },

    render: function() {
      var context = {};
      this.$el.html(this.template(context));

      this._petView.$el = this.$el.find('.pet-display');
      this._petView.render();
    }

  });
});