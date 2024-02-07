const express = require("express");
const router = express.Router();
const itemCategoriesController = require("../controllers/itemCategoriesController");
const { checkSchema } = require("express-validator");
const {
  itemCategoriesFormValidation,
} = require("../middleware/formValidation/itemCategoriesFormValidation");
const validate = require("../middleware/validation");
const passportAuth = require("../lib/passport");

router.get(
  "/",
  passportAuth.authenticate("jwt", { session: false }),
  async function (req, res, next) {
    itemCategoriesController.getAll(req, res, next);
  }
);

router.post(
  "/",
  passportAuth.authenticate("jwt", { session: false }),
  checkSchema(itemCategoriesFormValidation),
  validate,
  async function (req, res, next) {
    itemCategoriesController.create(req, res, next);
  }
);

router.put(
  "/:id",
  passportAuth.authenticate("jwt", { session: false }),
  async function (req, res, next) {
    itemCategoriesController.update(req, res, next);
  }
);

router.delete(
  "/:id",
  passportAuth.authenticate("jwt", { session: false }),
  async function (req, res, next) {
    itemCategoriesController.delete(req, res, next);
  }
);

module.exports = router;
