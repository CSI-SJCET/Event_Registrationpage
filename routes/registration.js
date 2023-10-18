var express = require("express");
var mongoose = require("mongoose");
var mailer = require("../node-mailer/confirmation");
var registration = require("../helper/registration-helper");

var router = express.Router();

router.post("/", function (req, res) {
  try {
    var newid = new mongoose.Types.ObjectId();
    var data = {
      _id: newid,
      name: req.body.name,
      number: req.body.number,
      email: req.body.email,
      year: req.body.year,
      branch: req.body.branch,
      Howdidyouhearabout: req.body.social,
      queriesorSuggestion: req.body.qt,
    };

    registration
      .insert_std(data)
      .then(function (result) {
        console.log(result.data);
        mailer.sendEmail(req.body.name, req.body.email);
        res.status(201).json({ message: result.Status, data: result.data });
      })
      .catch(function (err) {
        if (err.name === "MongoBulkWriteError" && err.code === 11000) {
          console.log("Duplicate_entry:", err);
          res
            .status(409)
            .json({
              error:
                "Duplicate entry! This phonenumber or email already exists.",
            });
        } else {
          console.error("Error saving user:", err);
          res.status(500).json("Internal Server Error");
        }
      });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json("Internal Server Error");
  }
});

module.exports = router;
