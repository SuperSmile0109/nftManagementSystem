const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date_form: { type: Date, default: Date.now },
});

module.exports = mongoose.model("user", UserSchema);
