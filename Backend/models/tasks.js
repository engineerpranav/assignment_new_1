
const mongoose=require("mongoose");

const taskSchema=new mongoose.Schema({

    "title":{
        type:String,
        required:[true,"Please Enter task title"]
    },
    "assignee":{
        type:String,
        required:[true,"Please enter assignee name"]
    },
    "user":{
        type:String,
        required:[true,"please enter user name"]
    },
    "sprint":{
        type:String,
        required:[true,"please select sprint"]
    },
    "status":[{
        type:String,
        required:[true,"please select task status"]
    }],
    "type":[{
        type:String,
        required:[true,"please select task type"]
    }]
})


const Task=mongoose.model("Task",taskSchema);

module.exports={
   Task
}



