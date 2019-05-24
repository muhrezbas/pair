module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Tweets', 'RetweetId', Sequelize.INTEGER);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Tweets','RetweetId');
  }
};