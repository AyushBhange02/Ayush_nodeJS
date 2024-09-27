// const ayush = require('./module.js');
// const http = require("http");
// let server = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     response.write("<h1>Hello World</h1>");
//     response.end();
    
//     console.log(
//         ayush.hello(),
//        ayush.add(10, 20),
//        ayush.sub(20, 10)
//     );
// });

// server.listen(3200);

const http = require('http');
let x = 0;

let server = http.createServer((request, response) => {
    x = x + 1;
    response.writeHead(200, { 'Content-Type': 'text/html' }); // Set the content type
    response.write("<h1>Enjoy Programming</h1>");
    response.write(`<h2>${x}</h2>`); // Corrected template literal syntax
    response.end();
});

const address = "127.0.0.1";
const port = 52000;

server.listen(port, address, () => {
    console.log("Server is running on http://" + address + ":" + port);
});
