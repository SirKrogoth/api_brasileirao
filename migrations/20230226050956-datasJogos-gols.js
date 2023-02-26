'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('datasjogos', 'golsTimeCasa', {
      type: Sequelize.INTEGER,
      allowNull: true
    });

    await queryInterface.addColumn('datasjogos', 'golsTimeFora', {
      type: Sequelize.INTEGER,
      allowNull: true
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('datasjogos', 'golsTimeCasa');
    await queryInterface.removeColumn('datasjogos', 'golsTimeFora');
  }
};
