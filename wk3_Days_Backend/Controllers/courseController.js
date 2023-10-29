const CourseModel = require("../Models/courseModel");


let createCourse= async(req,res)=>{
    try{
        let data=req.body;
        let registerCourse= await CourseModel.create(data);
        return res
            .status(201)
            .send({
                status:true,
                msg:"course data registered successfully",
                data:registerCourse,
            })
    
    }catch(error){
        return  res.status(500).send({
            status:false,
            msg:"internal server error",
        })
    };
};

module.exports = {createCourse};