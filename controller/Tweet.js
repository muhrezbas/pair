const Model = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const Hashtag = require('../helpers/hashtag')
class Controller {
    static getFormTweet(req, res) {
        res.render('tweet.ejs', {
            userId: req.session.user.id
        })
    }

    // static getTweet(req,res){
    //     Model.Tweet.findAll()
    // }

    static postFormTweet(req, res) {
        let input = req.body
        let dataMasuk

        Model.Tweet.create({
                Post: input.Tweets,
                UserId: req.session.user.id,
                createdAt: new Date()
            })
            .then(() => {
                Model.Tag.findAll()
                    .then((dataTag) => {
                        // console.log(dataTag, "bangsat")
                        dataMasuk = dataTag
                        Model.Tweet.findOne({
                                where: {
                                    Post: {
                                        [Op.like]: '%#%'
                                    }
                                },
                                order: [
                                    ['createdAt', 'DESC'],
                                ],
                            })
                            .then((data) => {
                                let hash = Hashtag(data.dataValues.Post)
                                var found = false;
                                if (hash !== null) {
                                    hash.forEach(element2 => {
                                        // console.log(element2)

                                        Model.Tag.findOrCreate({
                                                where: {
                                                    name: element2
                                                }
                                            })
                                            .then((datas) => {
                                           
                                                if (datas) {
                                                    console.log(datas[0].dataValues.id,"coba==========")
                                                    Model.TweetTag.findOrCreate({
                                                        where: {
                                                            TagId: datas[0].dataValues.id,
                                                            TweetId: data.dataValues.id
                                                        }
                                                    })
                                                }
                                            })
                                    })
                                }

                            })
                    })
                    .then(() => {
                        res.redirect(`/user/${req.session.user.id}`)
                    })
            })

            .catch((err) => {
                res.send(err)
            })
    }


}

module.exports = Controller