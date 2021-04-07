const bcrypt = require("bcryptjs");
const JSONResponse = require("../libs/JSONResponse");
let mahasiswaSchema = require("../Models/Mahasiswa");
let user = require("../Models/ActiveUSer");

module.exports = {
  create(req, res, next) {
    mahasiswaSchema
      .find({ nim: req.body.nim })
      .then((result) => {
        user.create({ nim: result[0].nim }).then((data) => {
          JSONResponse.success(req, res, null, data);
        });
      })
      .catch((errs) => {
        JSONResponse.serverError(req, res, errs.messag, data);
      })
      .catch((err) => {
        JSONResponse.serverError(req, res, err.messag, data);
      });
  },
};
