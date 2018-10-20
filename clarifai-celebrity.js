const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: '6a46fac341114f3297b13dda3188bf10'
});

const celebrityModel = 'e466caa0619f444ab97497640cefc4dc';

const url =
  'https://images.fandango.com/ImageRenderer/300/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/185343652.jpg';

app.models
  .predict(celebrityModel, url)
  .then(response => {
    console.log(
      response.outputs[0].data.regions[0].data.face.identity.concepts
    );
  })
  .catch(error => {
    console.log(error);
  });
