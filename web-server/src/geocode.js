const got = require('got')
const keys = require('./keys.js')

async function get(address) {
  const locationUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + keys.mapboxAPIKey + '&limit=1'

  try {
    const response = await got(locationUrl, { responseType: 'json' })
    var data = response.body
    if (data.message) {
      console.log(data.message)
      return undefined
    } else if (data.features.length === 0) {
      console.log('Unable to find location')
      return undefined
    }
    const latitude = data.features[0].center[1]
    const longitude = data.features[0].center[0]
    const result = {
      latitude: latitude,
      longitude: longitude
    }
    return result
  } catch (error) {
    console.log('Unable to connect to location service');
    return undefined
  }
}

module.exports.get = get