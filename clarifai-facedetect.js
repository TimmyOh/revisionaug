const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: '6a46fac341114f3297b13dda3188bf10'
});

const model = 'a403429f2ddf4b49b307e318f00e528b';

const url =
  'https://images.fandango.com/ImageRenderer/300/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/185343652.jpg';

app.models
  .predict(model, url)
  .then(response => {
    console.log(response.outputs[0].data.regions[0]);
  })
  .catch(error => {
    console.log(error);
  });
