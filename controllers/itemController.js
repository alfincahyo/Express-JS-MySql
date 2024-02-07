const itemService = require("../services/items.service");

exports.getAll = async function (req, res, next) {
  try {
    let response = res.json(await itemService.getAll(req.query.page));
    return response;
  } catch (err) {
    console.error(`Error while getting items`, err.message);
    next(err);
  }
};

exports.create = async function (req, res, next) {
  try {
    let response = await itemService.create(req.body);
    return res.status(response.success ? 200 : 500).send(response);
  } catch (err) {
    console.error(`Error while creating item`, err.message);
    next(err);
  }
};

exports.update = async function (req, res, next) {
  try {
    let response = await itemService.update(req.params.id, req.body);
    return res.status(response.success ? 200 : 500).send(response);
  } catch (err) {
    console.error(`Error while updating item`, err.message);
    next(err);
  }
};

exports.delete = async function (req, res, next) {
  try {
    let response = await itemService.remove(req.params.id);
    return res.status(response.success ? 200 : 500).send(response);
  } catch (err) {
    console.error(`Error in deleting item`, err.message);
    next(err);
  }
};
