module.exports.userFormValidation = {
  name: {
    exists: { errorMessage: "Name field cannot be empty" },
  },
  gender: {
    exists: { errorMessage: "Gender field cannot be empty" },
    isIn: {
      options: [["Male", "Female"]],
      errorMessage: "Gender is Invalid",
    },
  },
  phone: {
    optional: true,
    isLength: {
      options: {
        min: 10,
      },
      errorMessage: "Phone number at least 10 digits",
    },
  },
  email: {
    exists: { errorMessage: "Email field cannot be empty" },
    isEmail: true,
  },
  password: {
    exists: { errorMessage: "Password field cannot be empty" },
    isLength: {
      errorMessage: "Password should be at least 6 chars long",
      options: {
        min: 6,
      },
    },
  },
};
