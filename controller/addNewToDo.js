const Todo = require('../model/todoSchema');

const addNewTodo = async (req, res) => {
  try {
    const { todoName, todoStatus } = req.body;
    const newTodo = await Todo.create({ todoName, todoStatus });

    res.status(200).json({
      message: "New todo added successfully",
      data: newTodo
    });

  } catch (error) {
    res.status(400).json({
      message: "Failed to add new todo",
      error: error.message   
    });
  }
};

module.exports = addNewTodo;
