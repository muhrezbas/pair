const Model = require('../models')

class Controller{
    static getFormTweet(req,res){
        res.render('tweet.ejs',{id : req.params.userId})
    }
    
    // static getTweet(req,res){
    //     Model.Tweet.findAll()
    // }

    static postFormTweet(req,res){
        let input = req.body
        Model.Tweet.create({
            Post : input.Tweets,
            UserId : req.params.userId,
            createdAt : new Date()
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