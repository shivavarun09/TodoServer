const Todo = require('../model/todoSchema');

const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const {todoName} = req.body; 
    // find todo
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({
        message: "Todo not found"
      });
    }

    // update status
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      {todoName:todoName},
      { new: true } // return updated document
    );

    res.status(200).json({
      message: "Todo status updated",
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
