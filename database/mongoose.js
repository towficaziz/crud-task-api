const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

 mongoose.connect("mongodb+srv://root:root@cluster0.avfdqfj.mongodb.net/taskmanagerdb")
// mongoose.connect("mongodb://towficmeanstackdb:3zuX8LCWdlIJwvb5c3mZNVYARxXPxRS2ZUzS1u326NUBmA5FbuAH3gY4AheFLAB3kfxtgT1JORIj76aQQkXzYg==@towficmeanstackdb.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@towficmeanstackdb@")
// ,{useNewUrlParser: true, useUnifiedTopology: true}
.then(()=>{
    console.log("Connected to D-Base!");
  })
  .catch((error)=>{
    console.log("Error occure while DB connection", error);
  });


  module.exports= mongoose;
