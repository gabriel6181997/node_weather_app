const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=9cc1cac8f17bae8092273b9eed540834`;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to weather forecast services!", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(
        undefined,
        `${body.weather[0].description}.It is current ${body.main.temp} degrees out. It feels like ${body.main.feels_like} degrees out.`
      );
    }
  });
};

module.exports = forecast;
