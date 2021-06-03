const express = require('express')

const app = express()

app.get('', (req, res) => {
  res.send('Hemlo Worlmd')
})

app.get('/help', (req, res) => {
  res.send('Helmp')
})

app.get('/about', (req, res) => {
  res.send('Aboumt')
})

app.get('/weather', (req, res) => {
  res.send('Weamther')
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
})