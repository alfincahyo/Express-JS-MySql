const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/", async function (req, res, next) {
  authController.login(req, res, next);
});

module.exports = router;
