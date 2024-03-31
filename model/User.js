const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  roll: {
    type: String,
    required: true,
    unique: true,
  },
  tryhackmeId: {
    type: String,
  },
  year: {
    type: String,
    required: true,
  },
  rate: {
    type: String,
    required: true,
  },
  isEventAttended: {
    type: Boolean,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
