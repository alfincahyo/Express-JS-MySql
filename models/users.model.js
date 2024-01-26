const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/sequelize.config");

const User = sequelize.define(
  "User",
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
    gender: {
      type: DataTypes.ENUM(["male", "female"]),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
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
    tableName: "users",
    freezeTableName: true,
    timestamps: true,
    underscored: true,
  }
);

module.exports = User;
