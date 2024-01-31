const userModel = require("../models/users.model");

exports.findUser = async (email) => {
  try {
    let user = await userModel.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      return { success: false, message: "User not found" };
    } else {
      return { success: true, message: "User has been found", data: user };
    }
  } catch (err) {
    console.log(err);
    throw error;
  }
};
