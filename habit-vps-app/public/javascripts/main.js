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
  var Backbone = require('backbone'),
      DashboardLayoutView = require('views/dashboardLayoutView'),
      PetView = require('views/petView');

  this.rootView = new DashboardLayoutView({el: 'body'});
  this.rootView.render();
});