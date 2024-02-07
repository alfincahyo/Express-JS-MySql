const itemCategoriesService = require("../services/itemCategories.service");

exports.getAll = async function (req, res, next) {
  try {
    let response = res.json(await itemCategoriesService.getAll(req.query.page));
    return response;
  } catch (err) {
    console.error(`Error while getting item categories`, err.message);
    next(err);
  }
};

exports.create = async function (req, res, next) {
  try {
    let response = await itemCategoriesService.create(req.body);
    return res.status(response.success ? 200 : 500).send(response);
  } catch (err) {
    console.error(`Error while creating item categories`, err.message);
    next(err);
  }
};

exports.update = async function (req, res, next) {
  try {
    let response = await itemCategoriesService.update(req.params.id, req.body);
    return res.status(response.success ? 200 : 500).send(response);
  } catch (err) {
    console.error(`Error while updating item categories`, err.message);
    next(err);
  }
};

exports.delete = async function (req, res, next) {
  try {
    let response = await itemCategoriesService.remove(req.params.id);
    return res.status(response.success ? 200 : 500).send(response);
  } catch (err) {
    console.error(`Error in deleting item categories`, err.message);
    next(err);
  }
};
