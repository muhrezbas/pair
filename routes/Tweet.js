const express = require('express')
const Router = express.Router()
const controllerTweet = require('../controller/Tweet')

Router.get('/:userId', controllerTweet.getFormTweet)
Router.post('/:userId', controllerTweet.postFormTweet)

module.exports = Router