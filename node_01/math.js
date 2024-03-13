function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

//Whatever we will write inside the module.exports will be exported 
//---------Exporting in the form of array-----------------
module.exports=[add,sub];  
//here we exported in the form of an array ---> this can be retrieved using the array destructuring 


//---------Exporting in the form of an Object----------------

// module.exports = {
//     "addition":add,
//     "subtraction":sub,
//     "data":"NA"
// };