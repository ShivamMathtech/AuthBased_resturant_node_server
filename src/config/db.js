const mongoose = require("mongoose");
const env = require("dotenv").config();
const mongodbconnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is connected");
  } catch (error) {
    console.log("There is Somthing error during the Connections", error);
  }
};

mongodbconnect();
module.exports = { mongoose };
