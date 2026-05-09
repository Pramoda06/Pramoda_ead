const fs=require("fs");
const http=require("http");
const path=require("path");

const server=http.createServer((req,res)=>{

    let filesys="";

    if(req.url==='/about'){
        filesys=path.join(__dirname,'pages','about.html');
    }

    else if(req.url==='/home'){
        filesys=path.join(__dirname,'pages','home.html');
    }

    else if(req.url==='/contact'){
        filesys=path.join(__dirname,'pages','contact.html');
    }

    else{
        filesys=path.join(__dirname,'pages','404.html');
    }

    fs.readFile(filesys,(err,content)=>{
        if(err)
        {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            return res.end("<h1>Server Error</h1>");
        }
         res.writeHead(200, { 'Content-Type': 'text/html' });
         res.end(content);
    });
});

server.listen(3000,()=>{
    console.log("the server is running at 3000 port");
});