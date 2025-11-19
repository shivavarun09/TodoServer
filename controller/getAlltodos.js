const Todo = require('../model/todoSchema');

const getAllTodos = async (req, res) => {
  try {
    const allTodos = await Todo.find();

    res.status(200).json({
      message: "Fetched all todos",
      data: allTodos
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch all todos",
      error: error.message
    });
  }
};

module.exports = getAllTodos;
