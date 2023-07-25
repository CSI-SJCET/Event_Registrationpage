const mongoose = require("mongoose");
const db = require("../db/mongo_connection"); 
const collection = require("../db/collection"); 

const userSchema = new mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  name:{ type:String,require:true},
  number: { type: Number, unique: true,require:true,},
  email: { type: String, unique: true,require:true },
  year: {type:String,require:true},
  branch: {type:String,require:true },
  Howdidyouhearabout:String,
  queriesorSuggestion:String,

});

const registration = mongoose.model(collection.REGISTRATION, userSchema);

module.exports = registration;
