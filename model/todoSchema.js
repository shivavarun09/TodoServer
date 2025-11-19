const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  todoName: {
    type: String,
    required: true
  },
  todoStatus: {
    type: Boolean,
    default: false  
  }
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
