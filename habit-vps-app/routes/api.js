var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Todo = mongoose.model('Todo');
var Item = mongoose.model('Item');
var UserData = mongoose.model('UserData');
var Pet = mongoose.model('Pet');
var Species = mongoose.model('Species');
var AdventureZone = mongoose.model('AdventureZone');

// Function that adds a generic restful API to a model
// router - an expressjs router
// route - a string of url "todos"
// model - a mongoose model ex Todo
// opts - optional arguments
// opts.methods - html methods to attach. Default is ['getAll', 'get', 'post', 'put', 'patch', 'delete']
var _restApi = function(router, route, model, opts) {

  opts = opts || {};
  opts.methods = opts.methods || ['getAll', 'get', 'post', 'put', 'patch', 'delete'];

  // Middleware function that tries to attach a resource to requests with an "id" parameter
  router.param(route + 'Id', function(req, res, next, id) {
    // Cast to ObjectId first because cast error shouldn't cause 500
    var objectId, error, query;
    try {
      objectId = mongoose.Types.ObjectId(id);
    } catch (e) {
      error = Error('cant find resource');
      error.status = 404;
      return next(error);
    }

    query = model.findById(objectId);
    query.exec(function(err, resource) {
      if (err) { return next(err); }
      if (!resource) {
        error = Error("can't find resource");
        error.status(404);
        return next(error);
      }
      req.resource = resource;
      return next();
    });
  });

  for (var i = 0; i < opts.methods.length; i++) {
    // curl http://localhost:3000/api/todos
    if (opts.methods[i] === 'getAll') {
      router.route('/' + route)
      // curl http://localhost:3000/api/todos
      .get(function(req, res, next) {
        model.find(function(err, resource) {
          if (err) {
            return next(err);
          }
          res.json(resource);
        });
      });
    } else if (opts.methods[i] === 'get') {
      router.route('/' + route + '/:' + route +'Id')
      .get(function(req, res, next) {
        res.json(req.resource);
      });
    } else if (opts.methods[i] === 'post') {
      router.route('/' + route)
      // Current behavior is that post requests that have extra fields will get created, but extra fields are not saved
      .post(function(req, res, next) {
        var resource = new model(req.body);
        resource.save(function(err, resource) {
          if (err) {
            return next(err);
          }

          res.json(resource);
        });
      });
    } else if (opts.methods[i] === 'put') {
      router.route('/' + route + '/:' + route +'Id')
      // curl -X PUT --data 'title=SomeOtherTitle&order=5&isDone=true&points=2' http://localhost:3000/api/todos/547a5379c4b26e0078c022cd
      .put(function(req, res, next) {
        var resource = req.resource;
        resource.update(req.body, function(err) {
          if (err) {
            return next(err);
          }
          res.json(resource);
        });
      });
    } else if (opts.methods[i] === 'patch') {
      router.route('/' + route + '/:' + route +'Id')
      .patch(function(req, res, next) {
        var resource = req.resource;
        resource.update(req.body, function(err) {
          if (err) {
            return next(err);
          }
          res.json(resource);
        });
      });
    } else if (opts.methods[i] === 'delete') {
      router.route('/' + route + '/:' + route +'Id')
      .delete(function(req, res, next) {
        var resource = req.resource;
        resource.remove();
        // What's the most appropriate message to return?
        res.json({message: 'success'});
      });
    }
  }
};

// Read-only api allows you to only use GET requests
var readOnlyApi = function(router, route, model) {
  _restApi(router, route, model, {methods: ['getAll', 'get']});
};

var fullRestApi = function(router, route, model) {
  _restApi(router, route, model);
};

fullRestApi(router, 'todos', Todo);
fullRestApi(router, 'items', Item);
fullRestApi(router, 'userData', UserData);
fullRestApi(router, 'pet', Pet);
readOnlyApi(router, 'species', Species);
readOnlyApi(router, 'adventureZones', AdventureZones);

module.exports = router;
