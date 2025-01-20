const express=require('express');
const app=express()
app.use(express.json());
app.post('/users',(req,res)=>{

    const{name,age,email,phone,password}=req.body;
    if(!email || !password){
        res.status(404).send({message})
    }
    console.log(req.body);
    res.send("post testing");
});
app.listen(3000,()=>{
    console.log("Server has started");
});