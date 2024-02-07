const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/sequelize.config");
const ItemCategoriesModel = require("./itemCategories.model");

const Item = sequelize.define(
  "items",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    item_category_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "items",
    freezeTableName: true,
    timestamps: true,
    underscored: true,
  }
);

Item.belongsTo(ItemCategoriesModel, { foreignKey: "item_category_id" });
ItemCategoriesModel.hasMany(Item, { foreignKey: "item_category_id" });

module.exports = Item;
