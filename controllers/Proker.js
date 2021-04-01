const JSONResponse = require("../libs/JSONResponse");
let prokerSchema = require("../Models/Proker");

module.exports = {
  getAll(req, res) {
    try {
      prokerSchema.find().populate(
        {
          path: "id_catatan_kegiatan",
          select: "judul tanggal deskripsi foto",
        },
        (req, data) => {
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
  get(req, res) {
    try {
      prokerSchema.find((error, data) => {
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
      prokerSchema.create(req.body, (error, data) => {
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
  getById(req, res) {
    try {
      prokerSchema.findById(req.params.id, (error, data) => {
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
      prokerSchema.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        (error, data) => {
          if (error) {
            JSONResponse.serverError(req, res, null, data);
          } else {
            prokerSchema.findById(req.params.id, (error, data) => {
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
      prokerSchema.findByIdAndDelete(req.params.id, (error, data) => {
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
