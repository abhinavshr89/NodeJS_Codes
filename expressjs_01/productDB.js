require("dotenv").config();
const connectDB = require("./db/connect.js");
const Product = require("./models/product.js");
const productJSON = require("./product.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.create(productJSON);
        console.log("Data imported successfully.");
       
    } catch (error) {
        console.error("Error importing data:", error);
       
    }
};

start();
