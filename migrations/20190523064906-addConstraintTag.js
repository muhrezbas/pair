'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addConstraint('TweetTags', ['TagId'], { 
        type: 'foreign key',
        name: 'tag_id',
        references: {
          table: 'Tags',
          field: 'id'
        },
      onDelete: 'set null',
      onUpdate: 'cascade'
    }).then(()=>{
      queryInterface.addConstraint('TweetTags',['PostId'],{
        type: 'foreign key',
        name: 'post_id',
        references: {
          table: 'Tweets',
          field: 'id'
        },
      onDelete: 'set null',
      onUpdate: 'cascade'
      })
    })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeConstraint('TweetTags', 'tag_id', {})
      .then(()=>{
        queryInterface.removeConstraint('TweetTags', 'post_id', {})
      })
  }
};