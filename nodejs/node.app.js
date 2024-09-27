const ramu = require('http');
let server = ramu.createServer((request,response)=>{
     response.write("<iframe src='https://ayushbhange02.github.io/bootstrap-project/' width='100%' height='100%'></iframe><h2>hello</h2>");
     response.end();
});

const address = "127.0.0.1";
const port = 52000;
server.listen(port,address,()=>{
    console.log("Server is running on http://" + address + ":" + port );
    });  //server is running on http://127.0.0.1:3000