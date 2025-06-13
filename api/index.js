const express= require("express");
const cors= require("cors");
const { create } = require("../mongodb_model/mongodbschema");
const MyUser = require("../mongodb_model/mongodbschema");
const connectToDatabase = require("../mongodbonfig");
const app= express();
const port=3001
app.use(cors());
app.use(express.json())
app.get('/getdata/:id',(req,res)=>{
    console.log(req.params.id);
    res.send("heeeeeheeeeeeeeeeee")

});
app.listen(port,()=>{
    console.log("server running on port",{port}
    );
    
})
app.post("/createdata",async(req,res)=>{
    const data=req.body;
    console.log(data);
    const createUser=await MyUser.create(data);
    console.log(createUser);
    res.send("data recieved");
    
})
connectToDatabase()