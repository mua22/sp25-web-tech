let mongoose = require("mongoose");
let schema = new mongoose.Schema({
  title: String,
});
let Model = mongoose.model("Category", schema);

module.exports = Model;
