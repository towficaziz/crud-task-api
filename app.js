const express = require("express");
const app = express();
const mongoose = require("./database/mongoose");

const TaskList = require("./database/models/taskList");
const Task = require("./database/models/task");

/*
CORS - Cross origin request securtiy
backend  - http://localhost:3000
frontend - http://localhost:4200
*/
// 3rd party library, app.use(cors());
//add headers
app.use(
    (req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, OPTIONS, DELETE"
    );
    next();
  });
//example of middleware
app.use(express.json()); // 3rd party body parser

//Routes or Rest API Endpoints or RESTFul webservices Endpoints
/*
TaskList - Create, Update, ReadTaskListById, ReadAllTaskList
Task - Create, Update, ReadTaskById, ReadAllTask
*/
// Routes or API endpoints for TaskList model
// Get All Task Lists
// http://localhost:3000/tasklists => [{TaskList},{TaskList}]

app.get("/tasklists", (req, res)=>{
  TaskList.find({})
    .then((lists)=>{
      res.status(200).send(lists);
    })
    .catch((error)=>{console.log(error);
    res.status(500);
    });
});

// Endpoint to get one tasklist by tasklist by id: http://localhost:3000/tasklists/63443568b45e694fce0331c5
app.get("/tasklists/:tasklistId" ,(req, res)=>{
  let tasklistId = req.params.tasklistId;
  TaskList.find({ _id: tasklistId})
    .then((taskList)=>{
      res.status(200).send(taskList);
    })
    .catch((error)=>{console.log(error);
    res.status(500);
    });
});



//Route or Endpoint for creating a TaskList

app.post("/tasklists", (req, res )=>{
 //console.log("Hello I am inside post method")
console.log(req.body);

let taskListObj = {"title": req.body.title}
TaskList(taskListObj).save()
  .then((taskList)=>{
    res.status(201).send(taskList);
  })
  .catch((error)=>{console.log(error);
  res.status(500);
  });

 });

 // full update of object
 app.put("/tasklists/:tasklistId" ,(req, res)=>{
  TaskList.findOneAndUpdate({ _id: req.params.tasklistId}, {$set: req.body})
  .then((taskList)=>{
    res.status(200).send(taskList);
  })
  .catch((error)=>{console.log(error);
  });
 });

 // partial update of object
//  app.patch("/tasklists/:tasklistId" ,(req, res)=>{
//   TaskList.findOneAndUpdate({ _id: req.params.tasklistId}, {$set: req.body})
//   .then((taskList)=>{
//     res.status(200).send(taskList)
//   })
//   .catch((error)=>{console.log(error);
//   });
//  });

// delete a tasklist by id
app.delete("/tasklists/:tasklistId" ,(req, res)=>{
  TaskList.findByIdAndDelete(req.params.tasklistId)
  .then((taskList)=>{
    res.status(201).send(taskList);
  })
  .catch((error)=>{console.log(error);
  });
 });
/*app.listen(3000, function(){
    console.log("Server started on port 3000");
});*/

app.listen(3000, ()=>{
    console.log("Server started on port 3000!");
});