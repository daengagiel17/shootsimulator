'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('instructor', [
      {
        name: 'Agiel',
        rank: "Brigadir Dua",
      },
      {
        name: 'Muharram',
        rank: "Brigadir Dua",
      },
      {
        name: 'Adityo',
        rank: "Brigadir Kepala",
      }  
    ], {});
  },

  async down (queryInterface, Sequelize) {}
};
