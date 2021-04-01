const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let mahasiswaSchema = new Schema(
  {
    nim: {
      type: String,
      unique: true,
      required: true,
    },
    pic: {
      type: String,
      required: true,
    },
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
    alamat: {
      type: String,
      required: true,
    },
    jurusan: {
      type: String,
      required: true,
    },
    fakultas: {
      type: String,
      required: true,
    },
  },
  {
    collection: "mahasiswa",
  }
);

module.exports = mongoose.model("Mahasiswa", mahasiswaSchema);
