const path=require("path");
const fs=require("fs");
path.join(__dirname,"text.txt");
fs.writeFile("text.txt","Hello World",(err,data)=>{
    if(err){
        console.log(err);
    }
});
fs.readFile("text.txt",(err,data)=>{
    if(err){
        console.log(err);
    }
    });