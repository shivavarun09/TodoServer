const mongoose = require('mongoose');

const connectDb=async()=>{
  try{
    await mongoose.connect("mongodb://127.0.0.1:27017/todoApp");
    console.log("connected to db successfully")
  }catch(error){
console.log("Failed to connect to Db")
  }
}

module.exports = connectDb