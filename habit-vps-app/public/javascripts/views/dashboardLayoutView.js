define(function(require) {
  var Webcore = require('webcore'),
      templates = require('templates'),
      SidebarLayoutView = require('views/sidebarLayoutView');

  return Webcore.View.extend({
    template: templates.dashboardLayout,

    initialize: function() {
      this._sidebarLayoutView = new SidebarLayoutView();
      this.render();
    },

    prepare: function() {
      return {};
    },

    render: function() {
      var context = this.prepare();
      this.templateRender(this.$el, this.template, context);

      this.injectView('sidebar-display-site', this._sidebarLayoutView);
    }
  });
});