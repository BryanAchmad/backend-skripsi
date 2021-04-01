const bcrypt = require("bcryptjs");
const JSONResponse = require("../libs/JSONResponse");
let mahasiswaSchema = require("../Models/Mahasiswa");

module.exports = {
  get(req, res) {
    try {
      mahasiswaSchema.find((error, data) => {
        if (error) {
          JSONResponse.serverError(req, res, null, data);
        } else {
          JSONResponse.success(req, res, null, data);
        }
      });
    } catch (error) {
      console.log(error.message, error.stack);
      JSONResponse.serverError(req, res, null, null);
    }
  },
  create(req, res) {
    try {
      mahasiswaSchema.create(
        {
          nim: req.body.nim,
          pic: bcrypt.hashSync(req.body.pic, 8),
          nama: req.body.nama,
          jenis_kelamin: req.body.jenis_kelamin,
          no_telp: req.body.no_telp,
          alamat: req.body.alamat,
          jurusan: req.body.jurusan,
          fakultas: req.body.fakultas,
        },
        (error, data) => {
          if (error) {
            JSONResponse.serverError(req, res, null, data);
          } else {
            JSONResponse.success(req, res, null, data);
          }
        }
      );
    } catch (error) {
      console.log(error.message, error.stack);
      JSONResponse.serverError(req, res, null, null);
    }
  },
  getById(req, res) {
    try {
      mahasiswaSchema.findById(req.params.id, (error, data) => {
        if (error) {
          JSONResponse.serverError(req, res, null, data);
        } else {
          JSONResponse.success(req, res, null, data);
        }
      });
    } catch (error) {
      console.log(error.message, error.stack);
      JSONResponse.serverError(req, res, null, null);
    }
  },
  update(req, res) {
    try {
      mahasiswaSchema.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        (error, data) => {
          if (error) {
            JSONResponse.serverError(req, res, null, data);
          } else {
            mahasiswaSchema.findById(req.params.id, (error, data) => {
              if (error) {
                JSONResponse.serverError(req, res, null, data);
              } else {
                JSONResponse.success(req, res, null, data);
              }
            });
          }
        }
      );
    } catch (error) {
      console.log(error.message, error.stack);
      JSONResponse.serverError(req, res, null, null);
    }
  },
  delete(req, res) {
    try {
      mahasiswaSchema.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
          JSONResponse.serverError(req, res, null, data);
        } else {
          JSONResponse.success(req, res, null, data);
        }
      });
    } catch (error) {
      console.log(error.message, error.stack);
      JSONResponse.serverError(req, res, null, null);
    }
  },
};
