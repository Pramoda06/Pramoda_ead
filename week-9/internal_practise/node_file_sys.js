const fs=require("fs");

console.log("Starting program...");

fs.writeFile('demo.txt','Name:Pramoda\n ROll.No:75\n',(err)=>{
    if(err){
        console.log("something went wrong");
    }
    else{
        console.log("the file is created");
    }
});
fs.readFile('demo.txt',(err,content)=>{
    if(err){
        console.log("something went wrong");
    }
    else{
        console.log(content.toString());
    }
});


fs.appendFile('demo.txt','Name:caroline\n ROll.No:231\n',(err)=>{
    if(err)
    {
        console.log("something went wrong");
        return;
    }
    
        console.log('appended successfully');
        fs.readFile('demo.txt',(err,data)=>{
    if(err){
        console.log("something went wrong");
    }
    else{
        console.log(data.toString());
    }
});
});
