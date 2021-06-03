console.log('Client JS loaded.');

const loc = 'New York'

fetch('/weather?address='+ encodeURIComponent(loc)).then((response) => {
  response.json().then((data) => {
  console.log(data);
  })
})