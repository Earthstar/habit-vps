// This file contains requirejs configuration and the main starting point of the app
require.config({
  paths: {
    jquery: '/bower_components/jquery/dist/jquery.min',
    underscore: '/bower_components/underscore-amd/underscore-min',
    backbone: '/bower_components/backbone-amd/backbone-min',
    handlebars: '/bower_components/handlebars/handlebars.runtime.min',
  }
});

define(function(require) {
  var $ = require('jquery');
  return {};
});