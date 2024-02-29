"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("datasJogos", {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      data: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      hora: {
        type: Sequelize.TIME,
        allowNull: true,
      },
      rodada: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      turno: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      timeCasa: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'clubes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      timeFora: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'clubes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      golsTimeCasa: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      golsTimeFora: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {},
};
