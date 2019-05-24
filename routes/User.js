const express = require('express')
const Router = express.Router()
const controllerUser = require('../controller/User')


Router.get('/:userId', controllerUser.getHome)
Router.get('/:userId/delete/:tweetId/:id', (req, res, next) => {
    if(req.params.userId===req.params.id) {
		next()
	} else {
		res.redirect(`/user/${req.params.userId}`)
	}
},controllerUser.getDelete)
Router.get('/:userId/edit/:tweetId/:id', (req, res, next) => {
    if(req.params.userId===req.params.id) {
		next()
	} else {
		res.redirect(`/user/${req.params.userId}`)
	}
},controllerUser.getEdit)
Router.post('/:userId/edit/:tweetId',controllerUser.postEdit)

// Router.post('/:userId', controllerTweet.postFormTweet)

module.exports = Router