const express = require('express')
const app = express()
const routerTweet = require('./routes/Tweet')
const routerUser = require('./routes/User')
// const routerSubject = require('./routes/subject')
// const routerHome = require('./routes/home')
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/', routerHome)
app.use('/tweet', routerTweet)
app.use('/user', routerUser)
// app.use('/subject', routerSubject)

app.get('/*', (req, res) => {
  res.render('error')
})

app.listen(3000, () => console.log(`Server running in port : ${port}!`))