const express = require("express");
const mahasiswaSchema = require("../Models/Mahasiswa");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  signin(req, res) {
    console.log(req.body);
    // mahasiswaSchema.findOne{}
  },
};
