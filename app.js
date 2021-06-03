const got = require('got')
const geocode = require('./geocode.js')
const forecast = require('./forecast.js')


if (process.argv.slice(2).length === 0 || process.argv.slice(2).length > 1) {
  console.log('Enter single location in double quotes. Eg. node app.js "New York"')
} else {
  geocode.get(process.argv.slice(2)[0]).then((data) => {
    console.log(data)
    forecast.get(data).then((data) => console.log(data))
  })
}
