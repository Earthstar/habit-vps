// This file contains requirejs configuration and the main starting point of the app
require.config({
  paths: {
    jquery: '/bower_components/jquery/dist/jquery.min',
    underscore: '/bower_components/underscore-amd/underscore-min',
    backbone: '/bower_components/backbone-amd/backbone-min',
    handlebars: '/bower_components/handlebars/handlebars.runtime.min',
    "backbone-nested": '/bower_components/backbone-nested-model/backbone-nested',
    webcore: 'webcore.beautified'
  }
});

define(function(require) {
  var $ = require('jquery'),
      Backbone = require('backbone'),
      DashboardLayoutView = require('views/dashboardLayoutView');

  var HabitVpsApp = Backbone.Router.extend({

    routes: {
      '': 'dashboard'
    },

    initialize: function() {
    },

    dashboard: function() {
      this.rootView = new DashboardLayoutView();
      $('body').append(this.rootView.$el);
    },

  });

  var app = new HabitVpsApp();

  // enable pushState to use urls without hashtags
  Backbone.history.start({pushState: true});

});