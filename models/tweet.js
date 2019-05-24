'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('Tweet', {
    Post: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    RetweetId : DataTypes.INTEGER
  }, {});
  Tweet.associate = function(models) {
    // associations can be defined here
    Tweet.hasMany(models.TweetTag)
    Tweet.belongsTo(models.Retweet)
    Tweet.belongsTo(models.User)
  };
  return Tweet;
};