'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      synopsis: {
        type: Sequelize.TEXT
      },
      score: {
        type: Sequelize.STRING
      },
      rank: {
        type: Sequelize.STRING
      },
      episodes: {
        type: Sequelize.STRING
      },
      favorite: {
        type: Sequelize.STRING
      },
      season: {
        type: Sequelize.STRING
      },
      genres: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      titleJ: {
        type: Sequelize.STRING
      },
      licencor: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts');
  }
};