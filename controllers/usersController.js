const users = require("../services/users.service");

exports.getAll = async function (req, res, next) {
  try {
    let response = res.json(await users.getAll(req.query.page));
    return response;
  } catch (err) {
    console.error(`Error while getting users`, err.message);
    next(err);
  }
};

exports.create = async function (req, res, next) {
  try {
    let response = await users.create(req.body);
    return res.status(response.success ? 200 : 500).send(response);
  } catch (err) {
    console.error(`Error while creating user`, err.message);
    next(err);
  }
};

exports.update = async function (req, res, next) {
  try {
    let response = await users.update(req.params.id, req.body);
    return res.status(response.success ? 200 : 500).send(response);
  } catch (err) {
    console.error(`Error while updating user`, err.message);
    next(err);
  }
};

exports.delete = async function (req, res, next) {
  try {
    let response = await users.remove(req.params.id);
    return res.status(response.success ? 200 : 500).send(response);
  } catch (err) {
    console.error(`Error in deleting user`, err.message);
    next(err);
  }
};
