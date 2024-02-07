module.exports.itemFormValidation = {
  name: {
    exists: { errorMessage: "Name field cannot be empty" },
  },
  price: {
    exists: { errorMessage: "stock field cannot be empty" },
  },
  stock: {
    exists: { errorMessage: "stock field cannot be empty" },
  },
  item_category_id: {
    exists: { errorMessage: "item category field cannot be empty" },
  },
};
