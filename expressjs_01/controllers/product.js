
//These are the call back functions that we wrote inside the http methods 
const getAllProducts = async (req,res)=>{
   res.status(200).json({message :"I am getting all Products"});
}

const getAllProductsTesting = async (req,res)=>{
    res.status(200).json({message :"I am getting all Products Testing"});
 }

 module.exports = {getAllProducts,getAllProductsTesting};
 