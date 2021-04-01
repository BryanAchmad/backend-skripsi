const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let prokerSchema = new Schema(
  {
    judul: {
      type: String,
    },
    divisi: {
      type: String,
    },
    deskripsi: {
      type: String,
    },
    id_catatan_kegiatan: [
      {
        type: mongoose.Types.ObjectId,
        ref: "CatatanKegiatan",
      },
    ],
  },
  {
    collection: "prokers",
  }
);

prokerSchema.virtual("catatan_kegiatan", {
  ref: "CatatanKegiatan",
  localField: "_id",
  foreignField: "proker",
});

prokerSchema.set("toObject", { virtuals: true });
prokerSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Proker", prokerSchema);
