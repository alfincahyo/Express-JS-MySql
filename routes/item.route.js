const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");
const { checkSchema } = require("express-validator");
const {
  itemFormValidation,
} = require("../middleware/formValidation/itemFormValidation");
const validate = require("../middleware/validation");
const passportAuth = require("../lib/passport");
const upload = require("../middleware/upload");

router.get(
  "/",
  passportAuth.authenticate("jwt", { session: false }),
  async function (req, res, next) {
    itemController.getAll(req, res, next);
  }
);

router.post(
  "/",
  passportAuth.authenticate("jwt", { session: false }),
  upload.single("image"),
  checkSchema(itemFormValidation),
  validate,
  async function (req, res, next) {
    itemController.create(req, res, next);
  }
);

router.put(
  "/:id",
  passportAuth.authenticate("jwt", { session: false }),
  checkSchema(itemFormValidation),
  validate,
  async function (req, res, next) {
    itemController.update(req, res, next);
  }
);

router.delete(
  "/:id",
  passportAuth.authenticate("jwt", { session: false }),
  async function (req, res, next) {
    itemController.delete(req, res, next);
  }
);

module.exports = router;
