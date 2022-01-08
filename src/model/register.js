const mongoose = require("mongoose");

const userLove = new mongoose.Schema({
  nameuser: {
    type: String,
    require: true,
  },
  namelove: {
    type: String,
    require: true,
  },

  // date: {
  //   type: Date,
  //   default: Date.now,
  // },
});
const Register = mongoose.model("forLove", userLove);
module.exports = Register;
