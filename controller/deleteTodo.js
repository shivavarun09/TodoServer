const Todo = require('../model/todoSchema');

const deleteTodo=async(req,res)=>{
  try{
  const {id} = req.params;
  const deletedTodo = await Todo.findByIdAndDelete(id)
  res.status(200).json({
    message:"Todo deleted successfully",
    data:deleteTodo
  })
  }
  catch(error)
  {
    res.status(500).json({
      message:"Failed to delete Todo",
      error:error.message
    })
  }
}
module.exports=deleteTodo