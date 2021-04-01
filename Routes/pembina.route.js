const express = require("express");
const router = express.Router();
let pembina = require("../controllers/Pembina");

/**
 * getAll
 */
router.route("/").get((req, res, next) => {
  pembina.get(req, res);
});

/**
 * create data
 */
router.route("/add").post((req, res, next) => {
  pembina.create(req, res);
});

/**
 * getById
 */
router.route("/:id").get((req, res, next) => {
  pembina.getById(req, res);
});

/**
 * updateData
 */
router.route("/update/:id").put((req, res, next) => {
  pembina.update(req, res);
});

/**
 * delete Data
 */
router.route("/delete/:id").delete((req, res, next) => {
  pembina.delete(req, res);
});

module.exports = router;
