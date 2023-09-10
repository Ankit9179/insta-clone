// basic server with node
const http = require("http"); // import http module

// server
const server = http.createServer((req, res) => {
  console.log("server created");
  res.end("hello world");
});

//listen server
server.listen(5000, "localhost", () => {
  console.log("server is runing on 5000");
});
