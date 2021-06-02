const got = require('got')
const keys = require('./keys.js')

async function get(location) {

  const weatherUrl = 'http://api.weatherstack.com/current?access_key=' + keys.weatherStackAPIKey + '&query=' + location.latitude + ',' + location.longitude

  try {
    const response = await got(weatherUrl, { responseType: 'json' })
    const data = response.body
    if (data.error) {
      console.log(data.error.info);
      return undefined
    }
    const result = {
      location: {
        name: data.location.name,
        region: data.location.region,
        country: data.location.country
      },
      forecast: data.current.weather_descriptions[0],
      temperature: data.current.temperature,
      feelslike: data.current.feelslike
    }
    return result
  } catch (error) {
    console.log('Unable to connect to weather service');
    return undefined
  }
}

module.exports.get = get