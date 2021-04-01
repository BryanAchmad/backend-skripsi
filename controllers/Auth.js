const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mahasiswaSchema = require("../Models/Mahasiswa");
const JSONResponse = require("../libs/JSONResponse");

module.exports = {
  signin(req, res) {
    // console.log(req.body);
    mahasiswaSchema.findOne({ nim: req.body.nim }).then((data) => {
      console.log(data);
      if (!data) {
        JSONResponse.serverError(req, res, "user not found", null);
      }
    });
  },
};
