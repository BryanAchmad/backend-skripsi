const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

let prokerSchema = require("../Models/Proker");

/**
 * create data
 */
router.route("/tambah-proker").post((req, res, next) => {
  prokerSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

/**
 * getAll
 */
router.route("/").get((req, res, next) => {
  prokerSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

/**
 * getById
 */
router.route("/edit-proker/:id").get((req, res, next) => {
  prokerSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

/**
 * update data
 */
router.route("/update-proker/:id").put((req, res, next) => {
  prokerSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        console.log(data);
        res.json(data);
      }
    }
  );
});

/**
 * delete data
 */
router.route("/delete-proker/:id").delete((req, res, next) => {
  prokerSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
