module.exports.loginFormValidation = {
  email: {
    exists: { errorMessage: "Email cannot be null" },
    isEmail: { errorMessage: "Email format wrong" },
  },
  password: {
    exists: { errorMessage: "Password cannot be null" },
  },
};
