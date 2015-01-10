define(function(require) {
  var Webcore = require('webcore'),
      templates = require('templates');

  // Use when you want a list view to automatically refresh children on attribute change
  // Useful if changing an attribute will change the order/number of models
  return Webcore.Views.List.extend({
    initialize: function(args) {
      this.super();
      this.listViewSetup(args);
      this.listenTo(this.collection, 'change', this.reRenderChildren);
      this.listenTo(this.collection, 'all', function() {console.log(arguments)})
      this.render();
    },

    reRenderChildren: function() {
      this.refreshChildrenViews({createNewViews: true});
    }

  });
});