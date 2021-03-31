const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const JSONResponse = require("../libs/JSONResponse");

let mahasiswaSchema = require("../Models/Mahasiswa");

/**
 * getAll
 */
router.route("/").get((req, res, next) => {
  try {
    mahasiswaSchema.find((error, data) => {
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
    mahasiswaSchema.create(req.body, (error, data) => {
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
    mahasiswaSchema.findById(req.params.id, (error, data) => {
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
    mahasiswaSchema.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      (error, data) => {
        if (error) {
          JSONResponse.serverError(req, res, null, data);
        } else {
          mahasiswaSchema.findById(req.params.id, (error, data) => {
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
    mahasiswaSchema.findByIdAndDelete(req.params.id, (error, data) => {
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
