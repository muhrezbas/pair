'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addConstraint('Tweets', ['UserId'], { 
        type: 'foreign key',
        name: 'user_id',
        references: {
          table: 'Users',
          field: 'id'
        },
      onDelete: 'set null',
      onUpdate: 'cascade'
    }).then(()=>{
      queryInterface.addConstraint('Retweets',['TweetId'],{
        type: 'foreign key',
        name: 'tweet_id',
        references: {
          table: 'Tweets',
          field: 'id'
        },
      onDelete: 'set null',
      onUpdate: 'cascade'
      })
    }).then(()=>{
      queryInterface.addConstraint('Retweets',['UserId'],{
        type: 'foreign key',
        name: 'user_id',
        references: {
          table: 'Users',
          field: 'id'
        },
      onDelete: 'set null',
      onUpdate: 'cascade'
      })
    })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeConstraint('Tweets', 'user_id', {})
      .then(()=>{
        queryInterface.removeConstraint('Retweets', 'tweet_id', {})
      })
      .then(()=>{
        queryInterface.removeConstraint('Retweets', 'user_id', {})
      })
  }
};