const Todo = require('../model/todoSchema');

const toggleStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { todoStatus } = req.body;  // frontend sends this

    if (typeof todoStatus !== "boolean") {
      return res.status(400).json({
        message: "toStatus must be a boolean value"
      });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { todoStatus: todoStatus },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({
        message: "Todo not found"
      });
    }

    res.status(200).json({
      message: "Todo status toggled successfully",
      data: updatedTodo
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to toggle todo status",
      error: error.message
    });
  }
};

module.exports = toggleStatus;
