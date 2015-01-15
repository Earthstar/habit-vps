define(function(require) {
  var _ = require('underscore'),
      UserDataCollection = require('collections/userDataCollection');

  // Caches is an object containing models/collections that should only exist once
  // If views outside a single hierarchy have to reference a model/collection, use a cache

  var cachedCollection = {
    userDataCollection: new UserDataCollection(),
  };
  _.each(cachedCollection, function(object) {
    object.fetch();
  });

  return cachedCollection;

});