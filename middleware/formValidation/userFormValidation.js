module.exports.userFormValidation = {
  name: {
    exists: { errorMessage: "Name field cannot be null" },
  },
  gender: {
    exists: { errorMessage: "Gender field cannot be null" },
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
};
