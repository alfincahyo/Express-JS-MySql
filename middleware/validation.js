const { validationResult } = require("express-validator");
const fs = require("fs");

const validate = async (req, res, next) => {
  const error = validationResult(req);

  if (error.isEmpty()) {
    return next();
  }

  // Check file upload
  if (req.file.path) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
      console.log(`successfully deleted ${req.file.path}`);
    });
  }

  const extractedErrors = [];
  error.array().map((err) => extractedErrors.push({ [err.path]: err.msg }));

  return res.status(442).json({
    errors: extractedErrors,
  });
};

module.exports = validate;
