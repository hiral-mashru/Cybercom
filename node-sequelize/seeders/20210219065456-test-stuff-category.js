'use strict';

const { fake } = require('faker');
const faker = require('faker')

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
    
    const items = generateFakeStuffCategories(50)
    await queryInterface.bulkInsert('StuffCategories', items ,{})

    // await queryInterface.bulkInsert('StuffCategories', [{
    //   name: 'Category 1',
    //   status: 1
    // },{
    //   name: 'Category 2',
    //   status: 0
    // },{
    //   name: 'Category 3',
    //   status: 1
    // },{
    //   name: 'Category 4',
    //   status: 0
    // }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('StuffCategories', null, {});
  }
};

function generateFakeStuffCategories(rowCount){
  const items = []

  for(let k=0; k<rowCount; k++){
    const newItem = {
      name: faker.commerce.department(),
      categoryImage: faker.image.image(),
      status: faker.random.arrayElement([1,0]),
    }
    items.push(newItem)
  }
  return items;
}