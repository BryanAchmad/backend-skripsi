const express = require("express");
const router = express.Router();
let kegiatan = require("../controllers/CatatanKegiatan");

/**
 * getAll
 */
router.route("/").get((req, res, next) => {
  kegiatan.get(req, res, next);
});

/**
 * create data
 */
router.route("/add").post((req, res, next) => {
  kegiatan.create(req, res, next);
});

/**
 * getById
 */
router.route("/:id").get((req, res, next) => {
  kegiatan.getById(req, res, next);
});

/**
 * updateData
 */
router.route("/update/:id").put((req, res, next) => {
  kegiatan.update(req, res, next);
});

/**
 * delete Data
 */
router.route("/delete/:id").delete((req, res, next) => {
  kegiatan.delete(req, res, next);
});

module.exports = router;
