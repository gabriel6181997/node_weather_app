const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=9cc1cac8f17bae8092273b9eed540834`

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather forecast services!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(undefined, `${response.body.weather[0].description}.It is current ${response.body.main.temp} degrees out. It feels like ${response.body.main.feels_like} degrees out.`);
    }
  });
};

module.exports = forecast;
