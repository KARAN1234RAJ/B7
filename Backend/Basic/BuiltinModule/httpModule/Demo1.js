const http = require("http");
/*  we are not going to use http in futute we will use express 


*/
// creating server
const server = http.createServer((req, res) => {
  console.log("req method", req.method);
  console.log("req url", req.url);
  if (req.url === "/login") {
    res.write("Welcome to login page");
  } else if (req.url === "/signup") {
     res.write("Welcome to signup page");
  } else {
    console.log("request recieved");
    res.write("Welcome to my server");
  }

  res.end();
});

// creating listner
server.listen(4000, () => {
  console.log("Serever is running on port no: 4000");
});
