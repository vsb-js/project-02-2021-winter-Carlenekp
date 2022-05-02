'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Details', [
      {
        /*review: 'Scandalized',
        equipement: "oil painting",
        movement:"Romanticism",
        artId:1,
        createdAt: new Date(),
        updatedAt: new Date()*/
  
        review: 'Great fame',
        equipement: "oil painting",
        movement:"Surrealism",
        artId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
   
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Details', null, {});

  }
};
