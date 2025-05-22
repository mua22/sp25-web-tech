let express = require("express");
let mongoose = require("mongoose");
let app = express();
let ProductModel = require("./models/product.model");
let ejsLayouts = require("express-ejs-layouts");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(ejsLayouts);
app.use(express.json());

app.use("/api/categories", require("./routes/api/categories.router"));
app.use("/", require("./routes/api/products.router"));

app.get("/contact-us", (req, res) => {
  res.render("contact-us");
});

app.get("/", (req, res) => {
  res.render("homepage");
});

app.listen(4000, () => {
  console.log("server started at localhost:4000");
});
let dbConnectionString =
  "mongodb+srv://usman:usman@cluster0.vidd3.mongodb.net/bscssp25";
mongoose.connect(dbConnectionString).then(() => {
  console.log("db connected: " + dbConnectionString);
});
