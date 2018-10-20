const express = require('express');
const app = express();

const movie = {
  name: 'I am Legend',
  description: 'Zombie aftermath movie',
  rating: 8
};

const movies = {
  data: [{ name: 'I am Legend' }, { name: 'Avengers' }]
};

app.get('/getmovie', (req, res) => {
  res.send(JSON.stringify(movies));
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
