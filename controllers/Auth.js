const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/configRoles");
const mahasiswaSchema = require("../Models/Mahasiswa");
const JSONResponse = require("../libs/JSONResponse");

module.exports = {
  signin(req, res) {
    try {
      mahasiswaSchema.findOne({ nim: req.body.nim }).then((data) => {
        // console.log(data.id);
        if (!data) {
          JSONResponse.serverError(req, res, "user not found", null);
        }
        var verify = bcrypt.compareSync(req.body.pic, data.pic);
        if (!verify) {
          JSONResponse.serverError(req, res, "password incorect!", null);
        }
        var token =
          "Bearer " +
          jwt.sign({ id: data.id }, config.secret, {
            expiresIn: 86400, //24h
          });

        res.status(200).send({
          code: 200,
          auth: true,
          id: req.body.id,
          message: "success",
          token: token,
        });
      });
    } catch (error) {
      JSONResponse.serverError(req, res, null, null);
    }
  },
};
