const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/sequelize.config");

const ItemCategories = sequelize.define(
  "item_categories",
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
    tableName: "item_categories",
    freezeTableName: true,
    timestamps: true,
    underscored: true,
  }
);

module.exports = ItemCategories;
