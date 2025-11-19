const express = require('express');
const router = express.Router();
const addNewTodo = require('../controller/addNewToDo');
const getAllTodos = require('../controller/getAlltodos')
const deleteTodo = require("../controller/deleteTodo")
const updateStatus = require("../controller/updateTodo")
const toggleStatus = require("../controller/toggleStatus")
router.post("/addtodo", addNewTodo);
router.put("/updateTodo/:id", updateStatus);
router.put("/updateTodostatus/:id", toggleStatus);
router.get("/getall", getAllTodos);
router.delete("/delete/:id",deleteTodo)

module.exports = router;
