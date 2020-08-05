//main starting point
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const router = require("./router.js");

//db setup
mongoose.connect("mongodb://localhost/auth", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

//app setup
app.use(morgan("combined")); //middleware
app.use(bodyParser.json({ type: "*/*" })); //middleware
router(app); //app routing

//server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
