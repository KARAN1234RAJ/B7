const http = require("http");

// console.log(http);
const server = http.createServer((req, res) => {
  console.log("Request recieved");
  if (req.url === "/login") {
    res.write("<h1>This is Login page</h1>");
  } else if (req.url === "/user") {
    res.write("<h1>user logedin successfully</h1>");
  } else {
    res.write("<h1>I am on Dashboard page</h1>");
  }

  res.end();
});

server.listen(5000, () => {
  console.log("Server is running on PORT:5000");
});
