const path = require('path')
const express = require('express')
const app = express()
const volleyball = require('volleyball')

app.use(volleyball)

//express.static lets us serve static file(non-dynamic files); path creates an absolute route from root directory to the start of the relative path we provide
app.use(express.static(path.join(__dirname, '../public')))

//this is body parser syntax for express version 4.17 and up
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//send us to server/api
app.use('/api', require('./api'))

// Send index.html for any other requests, when you can find the uri, this shows you the static html file(i.e. /home)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

//the 404 api route will be sent to next, which will eventually hit the below route
app.use(function (err, req, res, next) {
  // eslint-disable-next-line no-console
  console.error(err)
  // eslint-disable-next-line no-console
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

module.exports = app
