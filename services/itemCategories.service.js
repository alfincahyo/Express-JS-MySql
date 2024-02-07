const ItemCategoriesModel = require("../models/itemCategories.model");

async function getAll() {
  return await ItemCategoriesModel.findAndCountAll().then((data) => {
    return {
      success: "true",
      message: "Item Categories has been found.",
      data: data,
    };
  });
}

async function create(params) {
  try {
    const categories = {
      name: params.name,
      created_at: Date.now(),
      updated_at: Date.now(),
    };
    let response = await ItemCategoriesModel.create(categories);

    if (response) {
      return {
        success: true,
        message: "Item category created successfully !",
      };
    } else {
      return {
        success: false,
        message: "Error while creating item category !",
        data: response,
      };
    }
  } catch (err) {
    return {
      success: false,
      message: "Error while creating item category ! ",
      data: { err },
    };
  }
}

async function update(id, data) {
  try {
    let user = {
      name: data.name,
      updated_at: Date.now(),
    };

    let response = await ItemCategoriesModel.update(user, {
      where: { id: id },
    });
    if (response) {
      let itemCategory = await ItemCategoriesModel.findByPk(id);
      return {
        success: true,
        message: "Item Category successfully updated !",
        data: itemCategory.dataValues,
      };
    } else {
      return {
        success: false,
        message: "Error while updating item category !",
        data: response,
      };
    }
  } catch (err) {
    return {
      success: false,
      message: "Error while updating item category !",
      data: { err },
    };
  }
}

async function remove(id) {
  try {
    let response = await ItemCategoriesModel.destroy({
      where: {
        id: id,
      },
    });

    if (response) {
      return {
        success: true,
        message: "Item Category deleted successfully !",
      };
    } else {
      return {
        success: true,
        message: "Error while deleting item category !",
        data: response.error,
      };
    }
  } catch (err) {
    return {
      success: false,
      message: "Error while deleting item category !",
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
