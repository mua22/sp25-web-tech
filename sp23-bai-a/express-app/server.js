// start your server by node server.js
// or
// nodemon server
//if nodemon is not installed install it by running command> npm i nodemon -g

let express = require("express");

let server = express();

server.use(express.static("public"));
server.set("view engine", "ejs");

server.get("/login.html", (req, res) => {
  return res.status(404).send("File Not Found");
  res.render("homepage");
});

server.get("/", (req, res) => {
  //   res.send("Hello AI Classs");
  res.render("homepage");
});

server.listen(4000, () => {
  console.log("Server Started at localhost:4000");
});
