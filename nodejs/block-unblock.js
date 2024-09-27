const fs = require('fs');
console.log("step one....");

// Blocking code -sync code
const data = fs.readFileSync("demo.text");
console.log(data.toString());

// Non blocking code -asynk code
// fs.readFile("demo.text", function(err, data){
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// create a text file and write some text in it
// fs.writeFile("demo1.text", "By understanding the fundamentals of HTTP messages, you can effectively interact with web servers and build robust web applications.Sources and related content",() => {
//     console.log("file creating...");
// });

// read the text file
// const data = fs.readFileSync("demo1.text");
// console.log(data.toString());

// fs.readFile("demo1.text", function (err, data) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// try{
//     const data = fs.readFileSync("demo1.text");
//     console.log(data.toString());
// }
// catch(err){
//     console.log(err);
// }



// console.log("step two....");

// console.log("step three....");

// =============--------------------=======================
// const os = require('os');

// console.log(os.type());
// console.log(os.version());
// console.log(os.release());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);
// console.log(os.totalmem());
// console.log(os.freemem());

// ===============-------------------======================


