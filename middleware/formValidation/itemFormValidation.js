const itemCategoriesModel = require("../../models/itemCategories.model");

const checkItemCategories = async (value) => {
  const itemCat = await itemCategoriesModel.findByPk(value);
  if (!itemCat) {
    throw new Error("Item Categories Not Found !");
  }
  return value;
};

module.exports.itemFormValidation = {
  name: {
    notEmpty: { errorMessage: "Name field cannot be empty" },
  },
  price: {
    notEmpty: { errorMessage: "stock field cannot be empty" },
    isFloat: { errorMessage: "price must in float value" },
  },
  stock: {
    notEmpty: { errorMessage: "stock field cannot be empty" },
    isInt: { errorMessage: "stock must in number value!" },
  },
  item_category_id: {
    notEmpty: {
      errorMessage: "item category field cannot be empty",
      bail: true,
    },
    custom: {
      options: (value) => checkItemCategories(value),
      errorMessage: "Item Categories Not Found",
      bail: true,
    },
  },
};
