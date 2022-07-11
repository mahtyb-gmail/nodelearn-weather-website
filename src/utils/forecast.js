const request = require("request");

const forecast = (lng, lat, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=9d52e86e1b861c38d22983401221a663&query=" +
    lat +
    "," +
    lng +
    "&units=f";

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `It's ${body.current.weather_descriptions} In ${body.location.name}, ${body.location.region} It is currently ${body.current.temperature} degrees. It feels like ${body.current.feelslike}.`
      );

      // console.log(
      //  `It is currently ${response.body.current.temperature} degrees. It feels like ${response.body.current.feelslike}.`
      // );
    }
  });
};

module.exports = forecast;
