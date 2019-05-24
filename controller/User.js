const Model = require('../models')

class Controller{
    static getHome(req,res){
        Model.Tweet.findAll({
            include : [Model.User],
            order: [
                ['createdAt', 'DESC'],
            ]
        })
        .then((dataTweet)=>{
            // res.send(dataTweet)
            res.render('user.ejs',{dataTweet : dataTweet})
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
            res.redirect('/user')
        })
        .catch((err)=>{
            res.send(err)
        })
    }
}

module.exports = Controller