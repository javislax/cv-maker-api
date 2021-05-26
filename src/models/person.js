const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
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
  user :{ type: Schema.Types.ObjectId, ref: 'user' },
  savedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Model = mongoose.model("person", PersonSchema);

module.exports = Model;
