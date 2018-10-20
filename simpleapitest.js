const axios = require('axios');

const addr = 'Inti College Penang';
const newapikey = 'AIzaSyCAykLBH2AB4w_P2UKWy3RoAlSw9F_2pWU';
const apikey = 'AIzaSyAn7h3tsW_p0md5iISNFzLcJDoRGRgjWPg';

const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${addr}&key=${newapikey}`;

axios
  .get(url)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
