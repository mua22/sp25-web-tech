let express = require("express");
let router = express.Router();
let CategoryModel = require("../../models/category.model");
router.put("/:id", async (req, res) => {
  let record = await CategoryModel.findById(req.params.id);
  record.title = req.body.title;

  await record.save();
  return res.send(record);
});
router.get("/:id", async (req, res) => {
  let record = await CategoryModel.findById(req.params.id);
  return res.send(record);
});
router.delete("/:id", async (req, res) => {
  let record = await CategoryModel.findByIdAndDelete(req.params.id);
  return res.send(record);
});
router.post("/", async (req, res) => {
  let data = req.body;
  let record = new CategoryModel(data);
  await record.save();
  return res.send(record);
});

router.get("/", async (req, res) => {
  let records = await CategoryModel.find();
  return res.send(records);
});
module.exports = router;
