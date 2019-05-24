const Models = require('../models')
const User = Models.User
const header = ['id', 'UserName', 'Email', 'Password']
const title = 'user'
const bcrypt = require('bcryptjs');

class ControllerUser {
  static createGet(req, res) {
    res.render('formUser', {
      title: title,
      command: 'add',
      data: null,
      errData: null,
      header: header.slice(1)
    })
  }
  static home(req, res) {
    res.render('home', {
      title: title,
      command: 'LOGIN',
      data: null,
      errData: null,
      header: header.slice(1)
    })
  }

  static createPost(req, res) {
    console.log(req.body)
    User.create(req.body)
      .then(() => res.redirect('/'))
      .catch((err) => {
        console.log(err)
        res.render('forUser', {
          errData: err.message,
          title: title,
          command: 'add',
          data: null,
          header: header.slice(1),
        })
      })
  }
  static login(req, res) {
    // console.log(req.body)
    User.findOne({
        where: {
          Email: req.body.Email
        },
      })
      .then((data) => {
        if (req.body.UserName === data.dataValues.UserName) {
          console.log(data.dataValues.Password)
          let value = bcrypt.compareSync(req.body.Password, data.dataValues.Password)

          if (value) {
            req.session.user = {
              id: data.dataValues.id,
              name: data.dataValues.UserName
            }
         
            res.redirect(`user/${data.dataValues.id}`)
          } else {
            res.render('home', {
              errData: "salah password",
              title: title,
              command: 'LOGIN',
              data: null,
              header: header.slice(1),
            })
          }
          //  console.log(data)
        } else {
          res.render('home', {
            errData: "username/email salah",
            title: title,
            command: 'LOGIN',
            data: null,
            header: header.slice(1),
          })
        }

      })
      .catch((err) => {
        console.log(err);
        // res.send("username/email salah")
        res.render('home', {
          errData: "username/email salah",
          title: title,
          command: 'LOGIN',
          data: null,
          header: header.slice(1),
        })
      })

  }
}

module.exports = ControllerUser