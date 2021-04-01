const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const JSONResponse = require("../libs/JSONResponse");
const jwtAuthToken = require("../middleware/AuthToken");
let authController = require("../controllers/Auth");

/**
 * login
 */
router.route("/").post((req, res, next) => {
  try {
    authController.signin(req, res, next);
  } catch (error) {
    console.log(error.message, error.stack);
    JSONResponse.serverError(req, res, null, null);
  }
});

/**
 * cek status
 */
router.route("/status").post((req, res, next) => {
  try {
    jwtAuthToken.verifyAuthToken(req, res, next);
  } catch (error) {
    JSONResponse.serverError(req, res, null, null);
  }
});
module.exports = router;
