const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let pembinaSchema = new Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    jenis_kelamin: {
      type: String,
      required: true,
    },
    no_telp: {
      type: String,
      required: true,
    },
  },
  {
    collection: "pembina",
  }
);

module.exports = mongoose.model("Pembina", pembinaSchema);
