
const { count } = require("console");
const http = require("http");
const fs = require("fs");
const url = require("url");
//create server takes an callback function named requestListener

const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()} ${req.url}: New request received \n`;
    const myUrl =url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile("log.text",log,(err,data)=>{
        switch(myUrl.pathname){
            case'/' : res.end("Homepage");
            break;
            case '/about':res.end("I am Abhina Shrivastav");
            break;
            case '/contactus':res.end("this is the contact us page ");
            break;
            default: res.end("404 not found")
        }
    })
   
});

myServer.listen(8000,()=>{console.log("Server Started");})

