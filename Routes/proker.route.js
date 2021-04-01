const express = require("express");
const router = express.Router();

let proker = require("../controllers/Proker");

/**
 * create data
 */
router.route("/add").post((req, res, next) => {
  proker.create(req, res)
});

/**
 * getAll
 */
router.route("/").get((req, res, next) => {
  proker.get(req, res)
});

/**
 * getById
 */
router.route("/:id").get((req, res, next) => {
  proker.getById(req, res);
});

/**
 * update data
 */
router.route("/update/:id").put((req, res, next) => {
  proker.update(req, res);
});

/**
 * delete data
 */
router.route("/delete/:id").delete((req, res, next) => {
  proker.delete(req, res)
});

module.exports = router;
