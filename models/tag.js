'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: {
      type :DataTypes.STRING,
      validate: {
        isUnique(value) {
          return Tag.findOne({
              where: {
                name: value
              }
            })
            .then(data => {
              console.log(data)
              if (data) {
                throw new Error('Get other tag');
              }

            })
        }
      }
    }
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    Tag.hasMany(models.TweetTag)
  };
  return Tag;
};