const db = require("./database");
const helper = require("../helper");
const config = require("../config/dbConfig");
const userModel = require("../models/users.model");
const bcrypt = require("bcrypt");

async function getAll(params) {
  return await userModel.findAndCountAll().then((data) => {
    return {
      success: true,
      message: "User data has been found.",
      data: data,
    };
  });
}

async function create(params) {
  try {
    const saltRounds = 10;
    const userPass = await bcrypt.hash(params.password, saltRounds);
    const user = {
      name: params.name,
      gender: params.gender,
      phone: params.phone,
      email: params.email,
      password: userPass,
      created_at: Date.now(),
      updated_at: Date.now(),
    };

    let response = await userModel.create(user);

    if (response) {
      return {
        success: true,
        message: "User created successfully !",
      };
    } else {
      return {
        success: false,
        message: "Error while creating user !",
        data: response,
      };
    }
  } catch (err) {
    return {
      success: false,
      message: "Error while creating user ! ",
      data: { err },
    };
  }
}

async function update(id, data) {
  try {
    let user = {
      name: data.name,
      gender: data.gender,
      phone: data.phone,
      updated_at: Date.now(),
    };

    let response = await userModel.update(user, { where: { id: id } });
    if (response) {
      let userData = await userModel.findByPk(id);
      return {
        success: true,
        message: "User successfully updated !",
        data: userData.dataValues,
      };
    } else {
      return {
        success: false,
        message: "Error while updating user !",
        data: response,
      };
    }
  } catch (err) {
    return {
      success: false,
      message: "Error while updating user !",
      data: { err },
    };
  }
}

async function remove(id) {
  try {
    let response = await userModel.destroy({
      where: {
        id: id,
      },
    });

    if (response) {
      return {
        success: true,
        message: "User deleted successfully !",
      };
    } else {
      return {
        success: true,
        message: "Error while deleting user !",
        data: response.error,
      };
    }
  } catch (err) {
    return {
      success: false,
      message: "Error while deleting user !",
      data: err,
    };
  }
}

module.exports = {
  getAll,
  create,
  update,
  remove,
};
