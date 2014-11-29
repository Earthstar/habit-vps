var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

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

router.get('/rest/todos', function(req, res, next) {
  console.log('get request');
  Todo.find(function(err, todos) {
    if (err) {
      return next(err);
    }

    res.json(todos);
  });
});

router.get('/rest/todos/:todoId', function(req, res) {
  res.json(req.todo);
});

router.post('/rest/todos', function(req, res, next) {
  var todo = new Todo(req.body);
  console.log(req.body);
  todo.save(function(err, todo) {
    if (err) {
      return next(err);
    }

    res.json(todo);
  });
});

module.exports = router;
