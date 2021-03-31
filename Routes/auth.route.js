const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const JSONResponse = require("../libs/JSONResponse");

let authController = require("../controllers/Auth");

/**
 * login
 */
router.route("/signin").post((req, res, next) => {
  try {
    authController.signin(req, res);
  } catch (error) {
    console.log(error.message, error.stack);
    JSONResponse.serverError(req, res, null, null);
  }
});
