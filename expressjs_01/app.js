
require("dotenv").config();
const express = require("express");

const product_routes = require("./routes/product.js")

const connectDB = require("./db/connect.js")

const app = express();

const PORT = 5000;


app.get("/",(req,res)=>{
    res.send("Hi I am LIVE");
})


app.use("/api/products",product_routes);

const start = async ()=>{
    try{
      await connectDB(process.env.MONGODB_URL);
      app.listen(PORT,()=>{
        console.log(`I am LIVE on ${PORT}`);
      })
    }
    catch(error){
        console.log(error);
    }
}
start();