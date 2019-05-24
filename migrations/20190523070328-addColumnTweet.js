'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Tweets', 'UserId', Sequelize.INTEGER);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Tweets','UserId');
  }
};