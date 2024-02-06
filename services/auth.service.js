const userModel = require("../models/users.model");
const jwt = require("../lib/jwt");

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

exports.login = async (user, revoke) => {
  try {
    const token = await jwt.sign(user);
    const decoded = await jwt.verify(token);

    return {
      success: true,
      message: "Berhasil Login",
      data: {
        token,
        expiresIn: new Date(decoded.exp * 1000),
      },
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};
