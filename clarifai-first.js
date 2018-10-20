const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: '6a46fac341114f3297b13dda3188bf10'
});

const url =
  'https://ucl.suzuki.co.uk/static/images/unity/suzukiucl/new/models/celerio.png';

app.models
  .predict(Clarifai.GENERAL_MODEL, url)
  .then(response => {
    console.log(response.outputs[0].data);
  })
  .catch(error => {
    console.log(error);
  });
