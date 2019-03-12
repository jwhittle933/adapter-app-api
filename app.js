const express = require('express')
const path = require('path')
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const uuid = require('uuid/v4')
const session = require('express-session')
const apiRouter = require('./routes/api')
const app = express()

const corsOpts = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Cors and Security Middleware
app.use(cors(corsOpts))
app.use(helmet())
// app.use((req, res, next) => {
//   const clientAuth = req.get('Client-Token')
//   const serverAuth = process.env.SECRET
// clientAuth !== serverAuth
// ? res.status(401).send({ code: 401, message: 'Unauthorized' })
//   : next()
// })

app.get('/', (req, res) => {
  res.redirect('/api')
})

app.get('/healthcheck', (req, res) => {
  res.render('healthcheck', {
    text: `Hello from the A-P-I`,
    attr: `(– Adele, "Hello")`,
  })
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', apiRouter)

// Invalid route
app.use((req, res) => {
  return res
    .status(404)
    .send({ code: 404, message: `Route ${req.url} not available.` })
})

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
