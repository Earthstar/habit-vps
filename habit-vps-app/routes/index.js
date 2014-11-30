var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Todo = mongoose.model('Todo');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// Middleware function that tries to attach a todo object to requests with a "todo" parameter
router.param('todoId', function(req, res, next, id) {
  var query = Todo.findById(id);

  query.exec(function(err, todo) {
    if (err) { return next(err); }
    if (!todo) {
      return next(new Error("can't find todo"));
    }
    req.todo = todo;
    return next();
  });
});

// For all routes that don't need an ID
router.route('/api/todos')
.get(function(req, res, next) {
  Todo.find(function(err, todo) {
    if (err) {
      return next(err);
    }
    res.json(todo);
  });
})
.post(function(req, res, next) {
  var todo = new Todo(req.body);
  todo.save(function(err, todo) {
    if (err) {
      return next(err);
    }

    res.json(todo);
  });
});

// Routes that affect a specific ID
router.route('/api/todos/:todoId')
.get(function(req, res, next) {
  res.json(req.todo);
})
// curl -X PUT --data 'title=SomeOtherTitle&order=5&isDone=true&points=2' http://localhost:3000/api/todos/547a5379c4b26e0078c022cd
.put(function(req, res, next) {
  var todo = req.todo;

  todo.update(req.body, function(err) {
    if (err) {
      return next(err);
    }
    res.json(todo);
  });
})
.delete(function(req, res, next) {

});



// This has to be separate. TODO: refactor so that this only returns the active user's todos

module.exports = router;
