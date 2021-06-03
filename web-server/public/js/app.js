console.log('Client JS loaded.');

const loc = 'New York'


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const forecast = document.querySelector('#forecastCard')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = search.value
  forecast.innerHTML = "<div class=\"spinner-border text-light\" role=\"status\"><span class=\"visually-hidden\">Loading...</span></div>"
  fetch('/weather?address='+ encodeURIComponent(location)).then((response) => {
    response.json().then((data) => {
      if(data.error) {
        forecast.innerHTML = '<p>Location not found or API is down</p>'
      } else {
      forecast.innerHTML = '<p>It is '+ data.temperature +'°C in '+ data.location.name +','+ data.location.region+','+data.location.country+'.</p>'
      console.log(data)
      }
    })
  })
})