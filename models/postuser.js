"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class postUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      postUser.belongsTo(models.post, {
        foreignKey: "PostId",
      });
      postUser.belongsTo(models.User, {
        foreignKey: "UserId",
      });
    }
  }
  postUser.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      UserId: DataTypes.INTEGER,
      PostId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "postUser",
    }
  );
  return postUser;
};
