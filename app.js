const keys = require('./keys.js')
const got = require('got')

const url = 'http://api.weatherstack.com/current?access_key=' + keys.weatherStackAPIKey + '&query=mumbai'

var getData = async function () {
  try {
    const response = await got(url, {responseType: 'json'})
    const data = (response.body)
    console.log('It is currently ' + data.current.temperature + ' degrees. It feels like ' + data.current.feelslike + ' degrees out.');
  } catch (error) {
    console.log(error.response.body);
  }
}

getData() 