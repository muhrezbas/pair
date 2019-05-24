const Model = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const Hashtag = require('../helpers/hashtag')
class Controller{
    static getHome(req,res){
        // console.log(req.session.user.id)
        console.log(req.session)
        Model.Tweet.findAll({
            include : [Model.User],
            order: [
                ['createdAt', 'DESC'],
            ],
        })
        .then((dataTweet)=>{
            res.render('user.ejs',{dataTweet : dataTweet,userId:req.session.user.id})
        })       

        .catch((err)=>{
            res.send(err)
        })
    }

    static getDelete(req,res){
        Model.Tweet.destroy({
            where:{
                id: req.params.tweetId
            }
        })
        .then(()=>{
            res.redirect(`/user/${req.session.user.id}`)
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    static getEdit(req,res){
        Model.Tweet.findByPk(req.params.tweetId)
        .then((data)=>{
            // res.redirect('/user')
            res.render('formTweet.ejs',{dataTweet : data, userId : req.session.user.id})
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    static postEdit(req,res){
        let input = {
            Post: req.body.Tweets,
            }
        // console.log(input.post)
        Model.Tweet.findByPk(req.params.tweetId)
        .then((data)=>{
          // user {}
          return data.update(input)
        })
        // Model.Tweet.update({
        //     Post : input.Tweets
        // },{
        //     where : {
        //         id : req.params.tweetId
        //     }
        // })
        .then(()=>{
            res.redirect(`/user/${req.session.user.id}`)
        })
        .catch((err)=>{
            res.send(err)
        })
    }
}

module.exports = Controller