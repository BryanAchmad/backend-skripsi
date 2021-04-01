const JSONResponse = require("../libs/JSONResponse");
let prokerSchema = require("../Models/Proker");
let kegiatanSchema = require("../Models/CatatanKegiatan");

module.exports = {
  create(req, res, next) {
    try {
      kegiatanSchema.create(req.body, (error, data) => {
        if (error) {
          JSONResponse.serverError(req, res, null, data);
        } else {
          // console.log(data);
          prokerSchema.findOneAndUpdate(
            data.proker_have,
            {
              $push: { id_catatan_kegiatan: data },
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
      console.log(error.message, error.stack);
      JSONResponse.serverError(req, res, null, null);
    }
  },
};
