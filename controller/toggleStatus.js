const Todo = require('../model/todoSchema');

const toggleStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { toStatus } = req.body;  // frontend sends this

    if (typeof toStatus !== "boolean") {
      return res.status(400).json({
        message: "toStatus must be a boolean value"
      });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { todoStatus: toStatus },
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
