const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectID;
mongoose.set("useFindAndModify", false);
const deadline = require("../../models/deadline");
const validator = require("../../validations/deadlineValidations");

router.get("/", async (req, res) => {
  const deadlines = await deadline.find();
  res.json({ data: deadlines });
});

router.get("/:id", async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    const deadline = await deadline.findById(req.params.id);
    if (deadline) res.json({ data: deadline });
    else return res.status(404).send({ error: "Deadline does not exist" });
  } else return res.status(404).send({ error: "ID does not exist" });
});

router.post("/", async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const newDeadline = await deadline.create(req.body);
    res.json({ msg: "Deadline was created successfully", data: newDeadline });
  } catch (error) {
    console.log(error);
    return res.status(400).send("Failed to create the deadline");
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const updatedDeadline = await deadline.findByIdAndUpdate(
        { _id: req.params.id },
        req.body
      );
      if (updatedDeadline) res.json({ msg: "Deadline updated successfully" });
      else return res.status(404).send({ error: "Deadline does not exist" });
    } else return res.status(404).send({ error: "ID does not exist" });
  } catch (error) {
    return res.status(404).send({ error: "Failed to update the deadline" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const deletedDeadline = await deadline.findByIdAndRemove(req.params.id);
      if (deletedDeadline)
        res.json({
          msg: "Deadline was deleted successfully",
          data: deletedDeadline
        });
      else return res.status(404).send({ error: "Deadline does not exist" });
    } else return res.status(404).send({ error: "ID does not exist" });
  } catch (error) {
    console.log(error);
    return res.status(400).send("Failed to delete the deadline");
  }
});

module.exports = router;
