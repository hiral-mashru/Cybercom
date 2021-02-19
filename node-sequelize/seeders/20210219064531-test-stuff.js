'use strict';

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
    const items = generateFakeItems(100) 
    await queryInterface.bulkInsert('Stuff', items, {});
    // await queryInterface.bulkInsert('Stuff', [{
    //   name: 'Stuff1',
    //   description: "Only sample description",
    //   amount: 100,
    //   status: "active"
    // },{
    //   name: 'Stuff2',
    //   description: "Only sample description",
    //   amount: 150,
    //   status: "inactive"
    // }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Stuff', null, {});
  }
};

function generateFakeItems(rowCount){
  //generate code for fake data
  const data = [];
  for(let k=0; k<rowCount; k++){
    const newItem = {
      name: faker.commerce.productName(), //dummy product
      description: "Test content for product" + (k+1),
      amount: faker.commerce.price(),
      status: faker.random.arrayElement(["active", "inactive"])
    }
    data.push(newItem)
  }
  return data;
}
