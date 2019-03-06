const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const apiRouter = require('./routes/api')

const app = express()
const corsOpts = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(cors(corsOpts))
app.use(helmet())

app.get('/', (req, res) => {
  res.redirect('/api')
})

app.get('/healthcheck', (req, res) => {
  res.send(`
	<div style="margin-top: 5em">
		<h1 style="text-align: center">Hello from the A-P-I <br> – Adele, "Hello")</h1>
	</div>
	`)
})

app.use(logger('dev'))
app.use(express.json())
app.use(cookieParser())
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
