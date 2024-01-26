const { validationResult } = require("express-validator");

const validate = async (req, res, next) => {
  const error = validationResult(req);

  if (error.isEmpty()) {
    return next();
  }

  const extractedErrors = [];
  error.array().map((err) => extractedErrors.push({ [err.path]: err.msg }));

  return res.status(442).json({
    errors: extractedErrors,
  });
};

module.exports = validate;
