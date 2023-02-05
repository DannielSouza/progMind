const mongoose = require ("../db/connection")
const { Schema } = require("mongoose")

const thought = mongoose.model("Thought", new Schema({
  authorEmail: {type: String, required: true},
  mainFeeling: {type: String, required: true},
  subFeeling: {type: String, required: true},
  bodyFeeling: {type: String, required: true},
  situation: {type: String, required: false},
  thoughts: {type: String, required: false},
  action: {type: String, required: false},
},
{timestamps: true}
))


module.exports = thought;