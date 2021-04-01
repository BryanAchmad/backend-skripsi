const express = require("express");
const router = express.Router();
let mahasiswa = require("../controllers/Mahasiswa");

/**
 * getAll
 */
router.route("/").get((req, res, next) => {
  mahasiswa.get(req, res);
});

/**
 * create data
 */
router.route("/add").post((req, res, next) => {
  mahasiswa.create(req, res);
});

/**
 * getById
 */
router.route("/:id").get((req, res, next) => {
  mahasiswa.getById(req, res);
});

/**
 * updateData
 */
router.route("/update/:id").put((req, res, next) => {
  mahasiswa.update(req, res);
});

/**
 * delete Data
 */
router.route("/delete/:id").delete((req, res, next) => {
  mahasiswa.delete(req, res);
});

module.exports = router;
