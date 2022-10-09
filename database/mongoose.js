const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://root:root@cluster0.avfdqfj.mongodb.net/taskmanagerdb")
.then(()=>{
    console.log("Connected to D-Base!");
  })
  .catch(()=>{
    console.log("DBase connection Failed!");
  });


  module.exports= mongoose;
