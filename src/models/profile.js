const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  languages: [String],
  experience: [String],
  education: [String],
  biography: String,
  phone: String,
  name: String,
  surname: String,
  picture: String,
  birthday: String,
  job: String,
  iduser: String,
  _id: String,
  savedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Model = mongoose.model("profile", ProfileSchema);

module.exports = Model;
