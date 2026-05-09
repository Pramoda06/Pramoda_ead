const express=require("express");
const path=require("path");
const app=express();
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(express.static(path.join(__dirname,'public')));

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'pages','home.html'));
});

app.get('/login',(req,res)=>{
     res.sendFile(path.join(__dirname,'pages','login.html'));
});


app.listen(3000,()=>{
    console.log("the server is running at port 3000");
});