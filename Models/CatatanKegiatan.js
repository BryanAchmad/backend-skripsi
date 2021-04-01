const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let catataKegiatan = new Schema(
  {
    judul: {
      type: String,
      required: true,
    },
    tanggal: {
      type: String,
      required: true,
    },
    deskripsi: {
      type: String,
      required: true,
    },
    foto: {
      type: String,
    },
    proker_have: {
      type: mongoose.Types.ObjectId,
      ref: "Proker",
      required: true,
    },
  },
  {
    collection: "catatankegiatan",
  }
);

module.exports = mongoose.model("CatatanKegiatan", catataKegiatan);
