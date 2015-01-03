define(function(require) {
  var Webcore = require('webcore'),
      templates = require('templates'),
      SidebarLayoutView = require('views/sidebarLayoutView'),
      TodoLayoutView = require('views/todoLayoutView');

  return Webcore.View.extend({
    template: templates.dashboardLayout,

    initialize: function() {
      this._sidebarLayoutView = new SidebarLayoutView();
      this._todoLayoutView = new TodoLayoutView();
      this.render();
    },

    prepare: function() {
      return {};
    },

    render: function() {
      var context = this.prepare();
      this.templateRender(this.$el, this.template, context);

      this.injectView('sidebar-display-site', this._sidebarLayoutView);
      this.injectView('todo-display-site', this._todoLayoutView);
      this.delegateEvents();
    }
  });
});