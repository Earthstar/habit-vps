// This file contains requirejs configuration and the main starting point of the app
require.config({
  paths: {
    jquery: '/bower_components/jquery/dist/jquery.min',
    underscore: '/bower_components/underscore-amd/underscore-min',
    backbone: '/bower_components/backbone-amd/backbone-min',
    handlebars: '/bower_components/handlebars/handlebars.runtime.min',
    marionette: '/bower_components/marionette/lib/backbone.marionette'
  }
});

define(function(require) {
  var Marionette = require('marionette'),
      DashboardLayoutView = require('views/dashboardLayoutView'),
      PetView = require('views/petView');
  var HabitVPSApp = Marionette.Application.extend({
    initialize: function(options) {
      console.log('app started');
      this.rootView = new DashboardLayoutView({el: 'body'});
      this.rootView.render();
      console.log('after render');
    }
  });
  var app = new HabitVPSApp();
});