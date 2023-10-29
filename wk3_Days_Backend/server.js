// console.log("hello everyone");  
const express = require("express");

const mongoose=require("mongoose");

const routes=require("./Routes/routes");

const app=express();

app.use(express.json());

app.use("/",routes);



//db connections
mongoose.connect(
    "mongodb+srv{credentials}"
).then(()=>{
    console.log("database is connected");
}).catch((err)=>{
    console.log(err,"something went wrong");
});   //exception handling using .then

//Test api
//app is a instance of express res and req are response and request
app.get("/test",(req,res)=>{
    res.send("Hello Everyone this API");
});

//we listen at port 5000 

app.listen(5000,()=>{
    console.log("server is running on port 5000");
});

