module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Users', 'RetweetId', Sequelize.INTEGER);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Users','RetweetId');
  }
};