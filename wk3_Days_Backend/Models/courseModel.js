const mongoose=require("mongoose");

const subjectSchema=new mongoose.Schema({
    Subject:{
        type:String,
        Unique:true,
    },
    course:{
        type:String,
    },
},
    {timestamp:true} 
);

module.exports = new mongoose.model("Course",subjectSchema);

