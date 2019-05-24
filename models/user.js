'use strict';
const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    UserName: DataTypes.STRING,
    Email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "must be @ on email"
        },
        isUnique(value) {
          return User.findOne({
              where: {
                Email: value
              }
            })
            .then(data => {
              if (data) {
                throw new Error('Get other name email');
              }

            })
        }
      }
    },
    Password: DataTypes.STRING,
    Follower: DataTypes.INTEGER,
    Following: DataTypes.INTEGER,
    RetweetId: DataTypes.INTEGER
  }, {});
  User.addHook('beforeCreate', (user, options) => {
    var salt = bcrypt.genSaltSync(10);
    console.log(user)
    let hash = bcrypt.hashSync(user.Password, salt);
    user.Password = hash
  });
  User.associate = function (models) {
    // associations can be defined here
    User.belongsTo(models.Retweet)
    // User.hasMany(models.Tweet)
  };
  return User;
};