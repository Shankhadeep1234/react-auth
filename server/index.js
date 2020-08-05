//main starting point
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

//app setup

//server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
