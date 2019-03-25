const express = require('express')
const fs = require('fs')
const path = require('path')
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const apiRouter = require('./routes/api')
const app = express()

/* corsOpts for restricting access */
// const corsOpts = {
//   origin: 'https://sbts-adapter-app.herokuapp.com',
//   optionsSuccessStatus: 200,
// }

// Cors and Security Middleware
// app.use(cors(corsOpts))
app.use(cors())
app.use(helmet())

app.get('/', (req, res) => {
  res.redirect('/api')
})

app.get('/healthcheck', (req, res) => {
  res.send(`
    <div style="text-align: center; margin: 10vh;">
      <h1 style="font-family: monospace;">Hello from the A-P-I</h1>
      <h2 style="font-family: monospace;">(– Adele, "Hello")</h2>
    </div>
  `)
})

app.use(
  logger('dev', {
    skip: (req, res) => {
      return res.statusCode < 400
    },
  }),
)
app.use(
  logger('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {
      flags: 'a',
    }),
  }),
)
app.use(express.json())
app.use(express.static(path.join(__dirname, 'frontend/dist')))

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
