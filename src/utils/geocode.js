const request = require("request");
const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoibWFydGluZ2V0bW92aW4iLCJhIjoiY2w0N2ZjODhsMDAxZTNjcWlmd2dxdHYzZSJ9.QHXaIGbToCVXVjSu8bzGaw";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to locations services!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location.  Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;

// const url =
//   "http://open.mapquestapi.com/geocoding/v1/address?key=f5iGtihZOBeJyaKC3sdNiGhYs5V51HDC&location=" +
//   encodeURIComponent(address);

// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to location services!");
//   } else if (response.body.info.statuscode === 400) {
//     console.log("Unable to find location.  Try another search.");
//   } else {
//     const latitude = response.body.results[0].locations[0].latLng.lat;
//     const longitude = response.body.results[0].locations[0].latLng.lng;
//     console.log(latitude, longitude);
//
//     // const latLng = response.body.results[0].locations[0].latLng;
//     // console.log(latLng);
//   }
// });
// //
//

// Mapquest
// Key: f5iGtihZOBeJyaKC3sdNiGhYs5V51HDC
// http://open.mapquestapi.com/geocoding/v1/address?key=f5iGtihZOBeJyaKC3sdNiGhYs5V51HDC &location=Washington,DC

//const geocodeURL =
//  "http://open.mapquestapi.com/geocoding/v1/address?key=f5iGtihZOBeJyaKC3sdNiGhYs5V51HDC&location=Washington,DC";

// https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Jose.json?access_token=pk.eyJ1IjoibWFydGluZ2V0bW92aW4iLCJhIjoiY2w0N2ZjODhsMDAxZTNjcWlmd2dxdHYzZSJ9.QHXaIGbToCVXVjSu8bzGaw
