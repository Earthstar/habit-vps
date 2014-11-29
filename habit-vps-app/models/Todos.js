var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  title: String,
  order: Number,
  isDone: Boolean,
  points: {type: Number, default: 1}
});

mongoose.model('Todo', TodoSchema);