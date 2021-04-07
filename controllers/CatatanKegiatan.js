const JSONResponse = require("../libs/JSONResponse");
let prokerSchema = require("../Models/Proker");
let kegiatanSchema = require("../Models/CatatanKegiatan");

module.exports = {
  async create(req, res, next) {
    try {
      kegiatanSchema.create(req.body, (error, data) => {
        if (error) {
          JSONResponse.serverError(req, res, null, data);
        } else {
          prokerSchema.findByIdAndUpdate(
            { _id: data.proker_have },
            {
              $push: { catatan_kegiatan: data },
            },
            (error, dataproker) => {
              if (error) {
                JSONResponse.serverError(req, res, null, data);
              } else {
                JSONResponse.success(req, res, null, data);
              }
            }
          );
        }
      });
    } catch (error) {
      JSONResponse.serverError(req, res, error.message, null);
    }
  },
  getById(req, res) {
    try {
      kegiatanSchema.findById(req.params.id, (error, data) => {
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
  get(req, res, next) {
    try {
      kegiatanSchema.find((error, data) => {
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
