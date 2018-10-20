const axios = require('axios');

const addr = 'Inti College Penang';
const apikey = 'AIzaSyCAykLBH2AB4w_P2UKWy3RoAlSw9F_2pWU';
const oldapikey = 'AIzaSyDhUDwXlhJF0pzMIg4NoBr5LEifvOXMxbE';
const newapikey = 'AIzaSyAyTutGATrrs_rTc3fd1T_L5As_zrDxqrM';

const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${addr}&key=${newapikey}`;

axios
  .get(url)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
