const express = require('express')
const Router = express.Router()
const controllerTag = require('../controller/Tag')


Router.get('/:userId', controllerTag.getHome)
Router.get('/:userId/:tagId', controllerTag.getSearch)

// Router.post('/:userId', controllerTweet.postFormTweet)

module.exports = Router