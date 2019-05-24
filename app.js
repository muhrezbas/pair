const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const home = require('./routes/routesUser')
const routerTweet = require('./routes/Tweet')
const routerUser = require('./routes/User')
const routerTag = require('./routes/Tag')
const session = require('express-session')

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use("/", home)
app.use('/tweet', routerTweet)
app.use('/user', routerUser)
app.use('/tag',routerTag)
app.get('/*', (req, res) => {
    res.render('error')
  })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
