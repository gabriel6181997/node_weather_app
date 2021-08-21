const request = require("postman-request");

const url = `https://api.openweathermap.org/data/2.5/weather?q=hongkong&appid=9cc1cac8f17bae8092273b9eed540834&units=metric`;

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service.");
  } else if(response.body.error) {
    console.log("Unable to find location")
  } else {
    console.log(
      `${response.body.weather[0].description}.It is current ${response.body.main.temp} degrees out. It feels like ${response.body.main.feels_like} degrees out.`
    );
  }
});

const geoCodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ2FicmllbDYxODE5OTciLCJhIjoiY2tzZ3Nja2F6MW5kNTJuczZ1dWZweTgxYiJ9.A_fREC9L3wqTiHllLCJnbg`;

request({ url: geoCodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to geoCode services!")
  } else if(response.body.features.length === 0) {
    console.log("Unable to find location. Try another search!")
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }
});
