const got = require('got')
const geocode = require('./geocode.js')
const forecast = require('./forecast.js')

async function getWeather() {
  try {
    const response = await got(weatherUrl, { responseType: 'json' })
    const data = response.body
    if (data.error) {
      console.log(data.error.info);
    }
    console.log(data.current.weather_descriptions[0] + '. It is currently ' + data.current.temperature + '°C. It feels like ' + data.current.feelslike + '°C out.');
  } catch (error) {
    console.log('Unable to connect to weather service');
  }
}


geocode.get('dahmi kalan').then((data) => {
  console.log(data)
  forecast.get(data).then((data) => console.log(data))
})