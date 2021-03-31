const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const JSONResponse = require("../libs/JSONResponse");

let pembinaSchema = require("../Models/Pembina");
const { insertMany } = require("../Models/Pembina");

/**
 * getAll
 */
router.route("/").get((req, res, next) => {
  try {
    pembinaSchema.find((error, data) => {
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
});

/**
 * create data
 */
router.route("/add").post((req, res, next) => {
  try {
    pembinaSchema.create(req.body, (error, data) => {
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
});

/**
 * getById
 */
router.route("/:id").get((req, res, next) => {
  try {
    pembinaSchema.findById(req.params.id, (error, data) => {
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
});

/**
 * updateData
 */
router.route("/update/:id").put((req, res, next) => {
  try {
    pembinaSchema.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      (error, data) => {
        if (error) {
          JSONResponse.serverError(req, res, null, data);
        } else {
          pembinaSchema.findById(req.params.id, (error, data) => {
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
});

/**
 * delete Data
 */
router.route("/delete/:id").delete((req, res, next) => {
  try {
    pembinaSchema.findByIdAndDelete(req.params.id, (error, data) => {
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
});

module.exports = router;
