const itemModel = require("../models/items.model");

async function getAll(params) {
  return await itemModel.findAndCountAll().then((data) => {
    return {
      success: true,
      message: "Items data has been found.",
      data: data,
    };
  });
}

async function create(params) {
  try {
    const item = {
      name: params.body.name,
      price: params.body.price,
      stock: params.body.stock,
      image: params.file.filename,
      item_category_id: params.body.item_category_id,
      created_at: Date.now(),
      updated_at: Date.now(),
    };

    let response = await itemModel.create(item);

    if (response) {
      return {
        success: true,
        message: "Item created successfully !",
      };
    } else {
      return {
        success: false,
        message: "Error while creating item !",
        data: response,
      };
    }
  } catch (err) {
    return {
      success: false,
      message: "Error while creating item ! ",
      data: { err },
    };
  }
}

async function update(id, data) {
  try {
    const item = {
      name: data.name,
      price: data.price,
      stock: data.stock,
      image: data.image,
      item_category_id: data.item_category_id,
      updated_at: Date.now(),
    };
    let response = await itemModel.update(item, { where: { id: id } });
    if (response == 1) {
      let itemData = await itemModel.findByPk(id);
      return {
        success: true,
        message: "Item successfully updated !",
        data: itemData.dataValues,
      };
    } else {
      return {
        success: false,
        message: "Error while updating item !",
        data: response,
      };
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "Error while updating item !",
      data: { err },
    };
  }
}

async function remove(id) {
  try {
    let response = await itemModel.destroy({
      where: {
        id: id,
      },
    });

    if (response) {
      return {
        success: true,
        message: "Item deleted successfully !",
      };
    } else {
      return {
        success: true,
        message: "Error while deleting item !",
        data: response.error,
      };
    }
  } catch (err) {
    return {
      success: false,
      message: "Error while deleting item !",
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
