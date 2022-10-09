const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://root:root@cluster0.avfdqfj.mongodb.net/taskmanagerdb")
.then(()=>{
    console.log("Connected to D-Base!");
  })
  .catch((error)=>{
    console.log("Error occure while DB connection", error);
  });


  module.exports= mongoose;
