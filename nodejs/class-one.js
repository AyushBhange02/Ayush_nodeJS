
// x = 10
// y = 20
// console.log( x + y );

// const pintu = require('http');
// let server = pintu.createServer((please, give) => {
//     give.write("<iframe width='560' height='315' src='https://www.youtube.com/embed/ST9GtyRCkEo?si=GpPgRjQh4-Dhkd6e' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen>hii</iframe>");
//     give.end();
// })

// const address = "127.0.0.1";
// const port = 52000;
// server.listen(port, address, () => {
//     console.log("Server is running on http://" + address + ":" + port);
// });  //server is running on http://127.0.0.1:3000

// function greet(name, callback) {
//     console.log("Hello, " + name + "!");
//     callback();
//   }

//   function sayGoodbye() {
//     console.log("Goodbye!");   

//   }

//   greet("Alice", sayGoodbye);

function callBack(x) {
    x(100);
}
callBack(
    (y) => {
    let z = y + 10;
    console.log(z);
    }
);