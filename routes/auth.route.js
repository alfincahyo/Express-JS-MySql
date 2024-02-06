const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { checkSchema } = require("express-validator");
const {
  loginFormValidation,
} = require("../middleware/formValidation/loginFormValidation");
const validate = require("../middleware/validation");

router.post(
  "/",
  checkSchema(loginFormValidation),
  validate,
  async function (req, res, next) {
    authController.login(req, res, next);
  }
);

module.exports = router;
