const express = require('express')
const router = express.Router()

const ControllerUser = require('../controller/controllerUser.js')

router.use((req,res,next)=>{
    res.locals.errData = null
    next()
})
router.get('/add', ControllerUser.createGet)
router.post('/add', ControllerUser.createPost)
router.get('/',  ControllerUser.home)
router.post('/login', ControllerUser.login)

module.exports = router