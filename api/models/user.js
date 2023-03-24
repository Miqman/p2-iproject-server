"use strict";
const { Model } = require("sequelize");
const { comparePass, createHashPass } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile);
      User.belongsToMany(models.post, {
        through: models.postUser,
        foreignKey: "UserId",
      });
    }
  }
  User.init(
    {
      username: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Username is required" },
          notNull: { msg: "Username is required" },
        },
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Email is required" },
          isEmail: { msg: "Invalid email format" },
          notNull: { msg: "Email is required" },
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Password is required" },
          notNull: { msg: "Password is required" },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  //hooks
  User.beforeCreate((ins, ops) => {
    ins.password = createHashPass(ins.password);
  });
  return User;
};
