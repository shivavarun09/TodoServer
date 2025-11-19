const Todo = require('../model/todoSchema');

const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { todoName, todoStatus } = req.body;

    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({
        message: "Todo not found"
      });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { 
        todoName: todoName,
        todoStatus: todoStatus
      },
      { new: true }
    );

    res.status(200).json({
      message: "Todo updated successfully",
      data: updatedTodo
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to update todo",
      error: error.message
    });
  }
};

module.exports = updateStatus;
