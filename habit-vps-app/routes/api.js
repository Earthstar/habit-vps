var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Todo = mongoose.model('Todo');
var Item = mongoose.model('Item');

// Function that adds a generic restful API to a model
// router - an expressjs router
// route - a string of url "todos"
// model - a mongoose model ex Todo
var restApi = function(router, route, model) {
// Middleware function that tries to attach a todo object to requests with a "todo" parameter
  router.param(route + 'Id', function(req, res, next, id) {
    // Cast to ObjectId first because cast error shouldn't cause 500
    var objectId;
    try {
      objectId = mongoose.Types.ObjectId(id);
    } catch (e) {
      var error = Error('cant find resource');
      error.status = 404;
      return next(error);
    }
    var query = model.findById(objectId);

    query.exec(function(err, resource) {
      if (err) { return next(err); }
      if (!resource) {
        var error = Error("can't find resource");
        error.status(404);
        return next(error);
      }
      req.resource = resource;
      return next();
    });
  });

  // For all routes that don't need an ID
  router.route('/' + route)
  // curl http://localhost:3000/api/todos
  .get(function(req, res, next) {
    model.find(function(err, resource) {
      if (err) {
        return next(err);
      }
      res.json(resource);
    });
  })
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

  // Routes that affect a specific ID
  router.route('/' + route + '/:' + route +'Id')
  .get(function(req, res, next) {
    res.json(req.resource);
  })
  // curl -X PUT --data 'title=SomeOtherTitle&order=5&isDone=true&points=2' http://localhost:3000/api/todos/547a5379c4b26e0078c022cd
  .put(function(req, res, next) {
    var resource = req.resource;
    resource.update(req.body, function(err) {
      if (err) {
        return next(err);
      }
      res.json(resource);
    });
  })
  .patch(function(req, res, next) {
    var resource = req.resource;
    resource.update(req.body, function(err) {
      if (err) {
        return next(err);
      }
      res.json(resource);
    });
  })
  .delete(function(req, res, next) {
    var resource = req.resource;
    resource.remove();
    // What's the most appropriate message to return?
    res.json({message: 'success'});
  });
};

restApi(router, 'todos', Todo);
restApi(router, 'items', Item);

module.exports = router;
