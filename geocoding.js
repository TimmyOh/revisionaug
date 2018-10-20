const axios = require('axios');

const apikey = 'AIzaSyAn7h3tsW_p0md5iISNFzLcJDoRGRgjWPg';
const place = 'Inti College Penang';
const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${place}&key=${apikey}`;

axios
  .get(url)
  .then(response => {
    //console.log(response.data.results[0].geometry);
    // console.log(response.data.results[0].geometry.location.lat);
    // console.log(response.data.results[0].geometry.location.lng);
    //console.log(response.json);
    return response.json();
  })
  .catch(error => {
    console.log(error);
  });
