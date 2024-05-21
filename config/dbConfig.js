const mongoose = require("mongoose");

const databaseConnection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/short-url-generator");
    console.log("database is connected");
  } catch (error) {
    console.log("failed to connect the database");
  }
};

module.exports = databaseConnection;