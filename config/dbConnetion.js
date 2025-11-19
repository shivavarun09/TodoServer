const mongoose = require('mongoose');

const connectDb=async()=>{
  try{
    const mongoUri = process.env.MONGOURI;
    console.log(mongoUri)
    await mongoose.connect(mongoUri);
    console.log("connected to db successfully")
  }catch(error){
console.log("Failed to connect to Db")
  }
}

module.exports = connectDb