"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      post.belongsToMany(models.User, {
        through: models.postUser,
        foreignKey: "PostId",
      });
    }
  }
  post.init(
    {
      name: DataTypes.STRING,
      synopsis: DataTypes.TEXT,
      score: DataTypes.STRING,
      rank: DataTypes.STRING,
      episodes: DataTypes.STRING,
      favorite: DataTypes.STRING,
      season: DataTypes.STRING,
      genres: DataTypes.STRING,
      year: DataTypes.STRING,
      titleJ: DataTypes.STRING,
      licencor: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "post",
    }
  );
  return post;
};
