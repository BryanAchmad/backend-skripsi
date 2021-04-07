const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/configRoles");
const mahasiswaSchema = require("../Models/Mahasiswa");
const JSONResponse = require("../libs/JSONResponse");
let user = require("../Models/ActiveUSer");

module.exports = {
  signin(req, res, next) {
    try {
      user
        .find({ nim: req.body.nim })
        .then((result) => {
          // console.log(result[0].nim);/
          mahasiswaSchema.findOne({ nim: result[0].nim }).then((data) => {
            // console.log(data.id);
            if (!data) {
              JSONResponse.serverError(req, res, "user not found", null);
            }
            var verify = bcrypt.compareSync(req.body.pic, data.pic);
            console.log(verify);
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
              status: "success",
              message: "login Success !",
              token: token,
            });
          });
        })
        .catch((err) => {
          JSONResponse.serverError(req, res, "your nim not registered !", null);
        });
    } catch (error) {
      JSONResponse.serverError(req, res, null, null);
    }
  },
};
