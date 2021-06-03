const got = require('got')
const keys = require('./keys.js')

const error = {
  error: 'API Request Failed'
}

async function get(location) {

  const weatherUrl = 'http://api.weatherstack.com/current?access_key=' + keys.weatherStackAPIKey + '&query=' + location.latitude + ',' + location.longitude

  if(location === undefined) {
    return error
  }

  try {
    const response = await got(weatherUrl, { responseType: 'json' })
    const data = response.body
    if (data.error) {
      console.log(data.error.info);
      return error
    }
    const result = {
      location: {
        name: data.location.name,
        region: data.location.region,
        country: data.location.country
      },
      forecast: data.current.weather_descriptions[0],
      temperature: data.current.temperature,
      feelslike: data.current.feelslike,
      humidity: data.current.humidity,
      weather_icon: data.current.weather_icons
    }
    return result
  } catch (error) {
    console.log('Unable to connect to weather service');
    return error
  }
}

module.exports.get = get