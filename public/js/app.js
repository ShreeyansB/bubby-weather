console.log('Client JS loaded.');

const loc = 'New York'


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const forecast = document.querySelector('#weatherCol')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = search.value
  forecast.innerHTML = "<div class=\"spinner-border text-light my-spinner\" role=\"status\"><span class=\"visually-hidden\">Loading...</span></div>"
  fetch('/weather?address=' + encodeURIComponent(location)).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        forecast.innerHTML = '<p class="text-danger">Location not found or API is down</p>'
      } else {
        forecast.innerHTML = getWeatherCard(data)
      }
    })
  })
})


const getWeatherCard = function (data) {
  const weatherCard = `<div class="shadow-lg me-md-5 me-lg-0 me-xxl-4 user-select-none" id="testCard">
  <div class="row user-select-none">
    <div class="col col-5 my-4 ms-4">
      <img src="`+ data.weatherIcon + `"
        alt="Weather Icon" class="img-fluid rounded-circle shadow">

        <h2 class="display-6 mt-4">`+ data.forecast + `</h2>
        <h5 class="fw-normal mb-2">`+ data.humidity + `% Humidity</h5>
  </div>
      <div class="col col-6 text-end">
        <text class="m-0 p-0" id="weatherCardTemp">`+ data.temperature + `°</text>
        <h5 class="me-4 pe-2">Feels like `+ data.feelslike + `°</h5>
        <h6 class="pt-1">`+ data.location.name + `, ` + data.location.region + `, ` + data.location.country + `</h6>
      </div>
    </div>
</div > `
return weatherCard
}