//import mangoose
const mongoose = require("mongoose");

//.......Connect to mongoDB......
//async uses await->it will wait for promises to resolve
//mongoose.connect-connects the nodejs and DB for this we need connection string
//process.env.MONGO_URI=it takes the string from .env file
//await=waits ultill connection is made

const connectDB = async () => {
  try {
    // Connect using connection string
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected.");
  } catch (error) {
    console.error("DB connection error:", error.message);
    process.exit(1); // Stop process if connection fails
  }
};

//.....export the connectDb function....
//this allows other files to import and use the funtion
module.exports = connectDB;

//why mongoose-it is an odm(object data modelling) it is a library for mongodb and nodejs .it provides schema based solution model
//it helps in defining schema,validating data,and provide powerful query language
