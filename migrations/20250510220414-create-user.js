'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Crea la tabla en la Base de Datos
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
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
  // Elimina la tabla en la Base de Datos
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};