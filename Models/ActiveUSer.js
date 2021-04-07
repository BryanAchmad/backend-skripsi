const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let activeUser = new Schema(
  {
    nim: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    collection: "activeUser",
  }
);

module.exports = mongoose.model("ActiveUser", activeUser);
