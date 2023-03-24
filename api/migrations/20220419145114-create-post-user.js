"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("postUsers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: "Users" },
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      PostId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: "posts" },
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("postUsers");
  },
};
