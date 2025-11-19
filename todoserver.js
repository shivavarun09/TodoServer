const express = require("express");
const connectDb = require("./config/dbConnetion");
const dotenv = require('dotenv');
const cors = require('cors')
const todoRoutes = require('./routes/todoRoutes');

dotenv.config();

const app = express();
app.use(cors({origin:"*"}))
app.use(express.json());

// Routes
app.use("/user", todoRoutes);


const port = process.env.PORT || 5000;

app.listen(port, async () => {
  try {
    await connectDb();
    console.log(`Server running on port ${port}`);
  } catch (error) {
    console.log("Error connecting to database", error);
  }
});
