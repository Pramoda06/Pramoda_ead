const express=require("express");
const app=express();
let student=
[
   {id:1, name:"pramoda",branch:"IT"},
   {id:2,name:"Caroline",branch:"CSE"},
   {id:3,name:"klaus",branch:"CSE"}
];
app.use(express.json());

let nextId = 4;

app.get('/students',(req,res)=>{
    res.send(student);
});

app.post('/students',(req,res)=>{
    const {name,branch}=req.body;

     if (!name || !branch) {
    return res.status(400).json({ message: "Name and branch required" });
  }

    let newstudent=
    {id: nextId++,
    name,
    branch};
    student.push(newstudent);
    res.status(201).json({
        message:"request accepted",
        student:newstudent
    });
});

app.put('/students/:id',(req,res)=>{
    let id=parseInt(req.params.id);
    const{name,branch}=req.body;
    const student1=student.find(s=>s.id===id);
    if(!student){
        return res.status(404).json({message:"student not found"});
    }
    if(name){
        student1.name=name;
    }
    if(branch){
        student1.branch=branch;
    }
    res.json({
    message: "Student updated",
    student
  });
});


app.listen(3000,()=>{console.log("server is starting at port 3000");});