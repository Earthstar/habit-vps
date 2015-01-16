define(function(require) {
  var _ = require('underscore'),
      UserDataModel = require('models/userDataModel');

  // Caches is an object containing models/collections that should only exist once
  // If views outside a single hierarchy have to reference a model/collection, use a cache

  var cache = {
    userDataModel: new UserDataModel(),
  };
  _.each(cache, function(object) {
    object.fetch();
  });

  return cache;

});