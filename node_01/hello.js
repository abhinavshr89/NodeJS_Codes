//I can run this file by typing "npm start"

console.log("I am learning Node js ");


// we can use array destructuring to import multiple values here 
// const [addImported, subImported] = require('./math.js');  // if we print this it will be an empty object
// console.log(addImported);
// console.log(subImported);
// console.log(addImported(10,20));
// console.log(subImported(10,20));


//------Here we are importing the functions in the form of an object-----
// const importedObject = require('./math.js');
// console.log(importedObject);
// console.log(importedObject['add']);
// console.log(importedObject['sub'])

// const importedObject2 = require('./math.js')   //Here importedObject2 is an Object
// console.log(importedObject2.addition(1,2));    
// console.log(importedObject2.subtraction(30,40));


//-----> We can also use the object destructuring methods---


// Importing the functions using object destructuring
// !IMPORTANT  ---> While object destructuring always put the keys inside the curly braces
// const { addition, subtraction ,data} = require('./math.js');

// // Using the functions
// const result1 = addition(5, 3); // Calling the addition function with arguments 5 and 3
// console.log(result1); // Output: 8

// const result2 = subtraction(10, 4); // Calling the subtraction function with arguments 10 and 4
// console.log(result2); // Output: 6


// console.log(data);


//---------> using exported functions like normal arrays 

// const importedArray = module.require("./math.js")
// console.log(importedArray);
// console.log(importedArray[0](1,2));
// console.log(importedArray[1](45,45));






