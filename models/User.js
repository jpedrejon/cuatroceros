// models/user.js
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  lastName: String,
  email: String,
  dateOfBrith: Date,
  address: String,
  location: Object,
  role: String,
  accessToken: String,
  facebookID: String
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
