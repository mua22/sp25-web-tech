// start your server by node server.js
// or
// nodemon server
//if nodemon is not installed install it by running command> npm i nodemon -g
let mongoose = require("mongoose");
let express = require("express");
let expressLayouts = require("express-ejs-layouts");
let server = express();

server.use(express.static("public"));
server.use(expressLayouts);
server.use(express.urlencoded());
server.set("view engine", "ejs");

server.get("/login.html", (req, res) => {
  return res.status(404).send("File Not Found");
  res.render("homepage");
});
server.use("/", require("./controllers/admin/admin.products.controller"));

server.get("/categories", (req, res) => {
  res.render("categories");
});
server.get("/", async (req, res) => {
  //   res.send("Hello AI Classs");
  let Product = require("./models/product.model");
  let products = await Product.find();
  // return res.send(products);
  res.render("homepage", { products });
});
mongoose.connect("mongodb://localhost:27017/bsai").then(() => {
  console.log("connected to db");
});
server.listen(4000, () => {
  console.log("Server Started at localhost:4000");
});
