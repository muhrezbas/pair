'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    UserName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    Follower: DataTypes.INTEGER,
    Following: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Retweet)
    // User.hasMany(models.Tweet)
  };
  return User;
};