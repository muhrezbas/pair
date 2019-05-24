// function makeid(length) {
//     var result           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//        result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
//  }
 
//  console.log(makeid(10));
// const RandomLetter = require('./helpers/randomletter')
        const crypto = require('crypto');
        // const hash = crypto.createHmac('sha256', 'EpvSJvO5DT')
        User.encryptPassword = function(plainText, salt) {
            return crypto
                .createHash('RSA-SHA256')
                .update(plainText)
                .update(salt)
                .digest('hex')
        }
        User.prototype.correctPassword = function(enteredPassword) {
            return User.encryptPassword(enteredPassword, this.salt()) === this.password()
        }
    //   .update('hacktiv8' + user.UserName)
    //   .digest('hex');
    // console.log(hash)
    // hacktiv8irsanto
    // 508db8162731dbe3295de88982d5803bfcb3db80d72a6cde04650762b0cd56d6
    