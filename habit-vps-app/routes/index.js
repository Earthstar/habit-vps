var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

console.log('In index.js');
var Todo = mongoose.model('Todo');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
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
