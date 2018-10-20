const axios = require('axios');

const apikey = '385e80';
const title = 'I am Legend';
const querystr = `http://www.omdbapi.com/?t=${title}&apikey=${apikey}`;

axios
  .get(querystr)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
