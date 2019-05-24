const express = require('express')
const Router = express.Router()
const controllerUser = require('../controller/User')

Router.get('/', controllerUser.getHome)
Router.get('/:tweetId',controllerUser.getDelete)
// Router.post('/:userId', controllerTweet.postFormTweet)

module.exports = Router