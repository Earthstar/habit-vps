define(function(require) {
  var Webcore = require('webcore');

  return Webcore.Model.extend({
    urlRoot: '/api/adventureZones'
  });
});