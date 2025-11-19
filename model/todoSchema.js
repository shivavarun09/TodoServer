const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  todoName: {
    type: String,
    required: true
  },
  todoStatus: {
    type: String,
    enum: ["not completed", "completed"],
    default:"not completed"
  }
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo
