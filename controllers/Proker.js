const JSONResponse = require("../libs/JSONResponse");
let prokerSchema = require("../Models/Proker");

module.exports = {
  getAll(req, res) {
    prokerSchema
      .find()
      .populate("catatan_kegiatan")
      .then((data) => {
        JSONResponse.success(req, res, null, data);
      })
      .catch((err) => {
        JSONResponse.serverError(req, res, err.message, null);
      });
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
      JSONResponse.serverError(req, res, error.messag, null);
    }
  },
  create(req, res) {
    try {
      prokerSchema.create(req.body, (error, data) => {
        if (error) {
          JSONResponse.serverError(req, res, error.messag, data);
        } else {
          JSONResponse.success(req, res, null, data);
        }
      });
    } catch (error) {
      JSONResponse.serverError(req, res, error.messag, null);
    }
  },
  getById(req, res) {
    try {
      prokerSchema.findById(req.params.id, (error, data) => {
        if (error) {
          JSONResponse.serverError(req, res, error.messag, data);
        } else {
          JSONResponse.success(req, res, null, data);
        }
      });
    } catch (error) {
      JSONResponse.serverError(req, res, error.messag, null);
    }
  },
  update(req, res) {
    try {
      prokerSchema.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        (error, data) => {
          if (error) {
            JSONResponse.serverError(req, res, error.messag, data);
          } else {
            prokerSchema.findById(req.params.id, (error, data) => {
              if (error) {
                JSONResponse.serverError(req, res, error.messag, data);
              } else {
                JSONResponse.success(req, res, null, data);
              }
            });
          }
        }
      );
    } catch (error) {
      JSONResponse.serverError(req, res, error.messag, null);
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
      JSONResponse.serverError(req, res, null, null);
    }
  },
};
