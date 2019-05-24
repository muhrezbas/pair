'use strict';
module.exports = (sequelize, DataTypes) => {
  const Retweet = sequelize.define('Retweet', {
    TweetId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {});
  Retweet.associate = function(models) {
    // associations can be defined here
    Retweet.hasMany(models.User)
    Retweet.hasMany(models.Tweet)
  };
  return Retweet;
};