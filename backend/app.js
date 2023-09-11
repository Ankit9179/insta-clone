// for server
const express = require("express"); //import
const app = express(); //server object
const dotenv = require("dotenv"); //import
dotenv.config();
const port = process.env.PORT;
const connectDb = require("./config/connectDb.js");
// coll mongodb fonc
connectDb();

// listen server
app.listen(port, () => {
  console.log("aap is listening on port " + port);
});

//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // basic server with express
// const express = require("express"); //import
// const app = express(); //server object
// const data = require("./data.js");
// const cors = require("cors");
// const PORT = 5000;

// //middleware
// app.use(cors());

// // routes
// app.get("/", (req, res) => {
//   res.json(data);
// });

// app.listen(PORT, () => {
//   console.log("aap is listening on port " + PORT);
// });

// // basic server with node
// const http = require("http"); // import http module

// // server
// const server = http.createServer((req, res) => {
//   console.log("server created");
//   res.end("hello world");
// });

// //listen server
// server.listen(5000, "localhost", () => {
//   console.log("server is runing on 5000");
// });
