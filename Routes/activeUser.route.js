const express = require("express");
const router = express.Router();

let user = require("../controllers/ActiveUser");

router.route("/").post((req, res, next) => {
  try {
    user.create(req, res, next);
  } catch (error) {}
});

module.exports = router;
