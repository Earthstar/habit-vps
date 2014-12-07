var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Todo = mongoose.model('Todo');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {});
});

module.exports = router;
