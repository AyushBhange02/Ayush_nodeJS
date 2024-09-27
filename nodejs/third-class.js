// function returnmethod(){
//     return 1000;
//     return 200;
// }
// x = returnmethod();
// console.log(x);

// =============================================

// function add(x,y){
//     return x+y;
// }
// z = add(10,20);
// console.log(z);

// =============================================

// function arithmaticOperators(x , y, opp){
//     if(opp == "+"){
//         return x+y;
//     }
//     else if(opp == "-"){
//         return x-y;
//     }
//     else if(opp == "*"){
//         return x*y;
//     }
//     else if(opp == "/"){
//         return x/y;
//     }
// }

// let z = arithmaticOperators(10,20,"+");
// console.log( "this is answer " + z);

// =============================================

// function string(word, rev) {
//     let x = word.split("");
//     let y = x.reverse();
//     let z = y.join("");
//     console.log(z);
//     if (rev) {
//         rev(z);
//     }
// }

// function ayush(reversedWord) {
//     console.log("ayush " + reversedWord);
// }

// string("Ayush", ayush);

// ============================================

// function callBack(x) {
//     x(100); 
// }
// callBack((y) => {
//     let z = y + 10;
//     console.log(z);
// });

// ============================================

// create server 

// const http = require('http');
// let server = http.createServer((request, response) => {
//     response.write("<h1>Hello welcome the node js server</h1>");
//     response.end();
// });
// const address = "127.0.0.1";
// const port = 3000;
// server.listen(port, address, () => {
//     console.log("Server is running on http://" + address + ":" + port);
// });

// ============================================

const http = require('http');

let server = http.createServer((request, response) => {
    // Check if the request URL is '/students'
    if (request.url === "/students") {
        // Set the response status code and content type
        response.writeHead(200, { 'Content-Type': 'text/html' });
        // Write the HTML content
        response.write("<html>");
        response.write("<head><title>Students</title></head>");
        response.write("<body><h1>Students</h1>");
        response.write("<ul><li>Ayush</li><li>John</li><li>Maria</li><li>Jane</li></ul>"); // Example of different students
        response.write("</body>");
        response.write("</html>");
        // End the response
        return response.end();
    }
    // For other URLs, respond with a 404 status
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end("404 Not Found");
    console.log("Request received for an unknown URL:", request.url);
});

// Define the server address and port
const address = "127.0.0.1";
const port = 3000;

// Start the server
server.listen(port, address, () => {
    console.log("Server is running on http://" + address + ":" + port);
});