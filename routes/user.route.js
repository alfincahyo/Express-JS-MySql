const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const { checkSchema } = require("express-validator");
const {
  userFormValidation,
} = require("../middleware/formValidation/userFormValidation");
const validate = require("../middleware/validation");

router.get("/", async function (req, res, next) {
  usersController.getAll(req, res, next);
});

router.post(
  "/",
  checkSchema(userFormValidation),
  validate,
  async function (req, res, next) {
    usersController.create(req, res, next);
  }
);

router.put("/:id", async function (req, res, next) {
  usersController.update(req, res, next);
});

router.delete("/:id", async function (req, res, next) {
  usersController.delete(req, res, next);
});

module.exports = router;
