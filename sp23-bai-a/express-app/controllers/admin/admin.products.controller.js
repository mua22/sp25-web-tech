let express = require("express");
let controller = express.Router();
let Product = require("../../models/product.model");
controller.get("/admin/products/create", (req, res) => {
  return res.render("admin/products/create");
});
controller.post("/admin/products/create", async (req, res) => {
  let data = req.body;

  let p = new Product();
  p.title = data.title;
  p.description = data.description;
  p.price = data.price;
  await p.save();
  // return res.send(p);
  return res.redirect("/");
});

module.exports = controller;
