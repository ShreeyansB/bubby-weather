const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./geocode.js')
const forecast = require('./forecast.js')

const app = express()

// Define paths for express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup Handlebars and view loc
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Bubby'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    text: 'Some helpful text'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Shreeyans'
  })
})


app.get('/weather', (req, res) => {
  if (!req.query.address) {
    res.send({ error: 'Address not provided' })
  } else {
    var result = {}
    geocode.get(req.query.address).then((data) => {
      forecast.get(data).then((data) => res.send(data))
    })
  }
})

// 404 page - should be last route
app.get('*', (req, res) => {
  res.render('404')
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
})