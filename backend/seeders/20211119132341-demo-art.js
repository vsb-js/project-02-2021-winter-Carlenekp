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
     await queryInterface.bulkInsert('Arts', [
      /*{

      type: 'Painting',
      creator: "Eugene Delacroix",
      title:"La liberté guidant le peuple",
      year: 1830,
      country: "France",
      inspiration: "Revolution",
      createdAt: new Date(),
      updatedAt: new Date()
        },*/
/*
      {
      type: 'Painting',
      creator: "Pablo Picasso",
      title:"Guernica",
      year: 1937,
      country: "Spain",
      inspiration: "War of Spain",
      createdAt: new Date(),
      updatedAt: new Date() 
   }/*
  {
     type: 'Sculpture',
      creator: "Michel Ange",
      title:"La Pietà Bandini",
      year: 1555,
      country: "Italy",
      inspiration: "Religion",
      createdAt: new Date(),
      updatedAt: new Date()

    }*/], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Arts', null, {});

  }
};
