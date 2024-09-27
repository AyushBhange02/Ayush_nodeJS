// create server
const http = require('http');
let server = http.createServer((request, response) => {
    if (request.url === "/students") {
        // Set the response status code and content type
        response.writeHead(200, { 'Content-Type': 'text/html' });
        // Write the HTML content
        response.write("<html>");
        response.write("<head><title>Students</title></head>");
        response.write("<body><h1>Students</h1>");
        response.write("<ul><li>Ayush</li><li>Ayush</li><li>Ayush</li><li>Ayush</li></ul>"); // Example of different students
        response.write("</body>");
        response.write("</html>");
        // End the response
        return response.end();
    }
   
    response.write("<html>");
    response.write("<head><title>Students form</title></head>");
    response.write("<body><h1>Students form</h1>");
    response.write("<form action='/students' method='POST'>");
    response.write("<label for='name'>Name:</label>");
    response.write("<input type='text' id='name' name='name'><br>");
    response.write("<label for='age'>Age:</label>");
    response.write("<input type='text' id='age' name='age'><br>");
    response.write("<label for='contact'>Contact:</label>");
    response.write("<input type='text' id='contact' name='contact'><br>");
    response.write("<input type='submit' value='Submit'>");
    response.write("</form>");
    response.write("</body>");
    response.write("</html>");
    response.end("");
});
const address = "127.0.0.1";
const port = 52000;
server.listen(port, address, () => {
    console.log("Server is running on http://" + address + ":" + port);
});