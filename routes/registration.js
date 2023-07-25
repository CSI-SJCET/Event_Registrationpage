const express = require("express");
const mongoose = require("mongoose");
const mailer=require('../node-mailer/confirmation')
let api = express.Router();
const registration = require("../helper/registration-helper");

api.post("/", async (req, res) => {
  const newid = new mongoose.Types.ObjectId(); 
//check the identifiers
  const data = [
    {
      _id: newid,
      name: req.body.name,
      number: req.body.number,
      email: req.body.email,
      year: req.body.year,
      brach: req.body.brach,
      Howdidyouhearabout: req.body.social,
      queriesorSuggestion: req.body.qt,
    },
  ];
console.log(data);
  registration
    .insert_std(data)
    .then((result) => {
      console.log(result.data);
      mailer.sendEmail(req.body.name,req.body.email);

      res.status(201).json({ message:result.Status, data: result.data });
    })
    .catch((err) => {
      if (err.name === "MongoBulkWriteError" && err.code === 11000){
            console.log("Duplicate_entry:",err);
            res.status(409).json({ error: "Duplicate entry! This phonenumber or email already exists." });
      }
      else{
            console.error("Error saving user:", err);
            res.status(500).json("Bad request!");

      }
        
    });
});

module.exports = api;
