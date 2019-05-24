'use strict';
module.exports = (sequelize, DataTypes) => {
  const TweetTag = sequelize.define('TweetTag', {
    TagId: DataTypes.INTEGER,
    PostId: DataTypes.INTEGER
  }, {});
  TweetTag.associate = function(models) {
    // associations can be defined here
    TweetTag.belongsTo(models.Tweet)
    TweetTag.belongsTo(models.Tag)
  };
  return TweetTag;
};