const Model = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const Hashtag = require('../helpers/hashtag')
class Controller{
    static getHome(req,res){
        Model.Tag.findAll({
            include : [{
                model :Model.TweetTag,
                include : [Model.Tweet]
            }]
        })
        .then(data=>{
            // res.send(data)
            res.render('tag.ejs',{data:data,userId : req.params.userId})
        })
    }

    static getSearch(req,res){
        Model.Tag.findByPk(req.params.tagId,{
            include : [{
                model :Model.TweetTag,
                include : [{
                    model :Model.Tweet,
                    include : [Model.User]
                }]
            }]
        })
        .then(data=>{
            // res.send(data)
            res.render('tag_search.ejs',{data:data,userId : req.params.userId})
        })
    }
}

module.exports = Controller