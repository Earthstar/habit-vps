define(function(require) {
  var Backbone = require('backbone'),
      UserDataModel = require('models/userDataModel');

  // Temporary collection until User gets defined
  return Backbone.Model.extend({
    model: UserDataModel,
    url: '/api/userData',
    getUserData: function() {
      return this.models[0];
    }
  });
});