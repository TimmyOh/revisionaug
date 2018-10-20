const express = require('express');
const app = express();
const axios = require('axios');

const apikey = '385e80';
const title = 'I am Legend';
const querystr = `http://www.omdbapi.com/?t=${title}&apikey=${apikey}`;

app.get('/getmovie', (req, res) => {
  axios
    .get(querystr)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
