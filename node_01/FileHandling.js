const fs = require("fs")

// console.log("Start");

// //Here the file is created and the text is written inside it 
// // const file= fs.writeFileSync('./test.txt',"Hey I am learning Node js");

// const file2 = fs.writeFile('./test.txt',"Hey this is the second Line",(a,b)=>{
//     console.log("task is performed asynchronously");

// })


// console.log("End");



console.log("-----START-----");


const result = fs.readFileSync("./data.txt","utf-8");
//  fs.readFile("./data.txt", "utf-8", (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);

//     }
// })


console.log(result);

console.log("-----END-----");
