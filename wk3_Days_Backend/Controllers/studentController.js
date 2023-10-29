const StudentModel=require("../Models/studentModel");


let createStudent= async(req,res)=>{
    try{
        let data=req.body;
        //.create is used to create a database
        let registerStudent= await StudentModel.create(data);
        return res
            .status(201) //returns status code
            .send({
                status:true,
                msg:"student data registered successfully",
                data:registerStudent,
            })
    }catch(error){
        return res.status(500).send({
            status:false,
            msg:"internal server error",
        })
    };
};

module.exports={createStudent};