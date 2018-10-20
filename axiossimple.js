const axios = require('axios');

const apikey = '385e80';
const title = 'I am Legend';
const querystr = `http://www.omdbapi.com/?t=${title}&apikey=${apikey}`;

axios
  .get(querystr)
  .then(response => {
    //console.log(response.data.Ratings);
    // const ratings = response.data.Ratings;
    // for (i = 0; i < ratings.length; i++) {
    //   console.log(ratings[i]);
    // }
    const ratings = response.data.Ratings;
    for (i = 0; i < ratings.length; i++) {
      console.log(`ratings[i]`);
    }
  })
  .catch(error => {
    console.log(error);
  });
