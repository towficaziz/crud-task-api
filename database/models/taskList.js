const mongoose = require("mongoose");

const TaskListSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minLength: 3
    }
});

const TaskList = mongoose.model("Tasklist", TaskListSchema);

module.exports = TaskList;