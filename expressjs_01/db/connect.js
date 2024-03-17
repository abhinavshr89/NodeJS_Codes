const mongoose = require("mongoose");
const uri = "mongodb+srv://user_abhinav:" + encodeURIComponent("Abhinav@1234") + "@abhinavapi.cetsrio.mongodb.net/AbhinavAPI?retryWrites=true&w=majority&appName=AbhinavAPI";

const connectDB = () => {
    console.log("connectDB");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = connectDB;
