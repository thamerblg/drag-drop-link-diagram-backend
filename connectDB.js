const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

const DATABASE_URI = process.env.DATABASE_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URI);
    console.log("db connected !!!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
