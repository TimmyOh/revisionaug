const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: '6a46fac341114f3297b13dda3188bf10'
});

const model = 'c0c0ac362b03416da06ab3fa36fb58e3';

const url =
  'https://media.licdn.com/dms/image/C4E03AQHZEYSLOGaT9A/profile-displayphoto-shrink_200_200/0?e=1544054400&v=beta&t=NB1qMfn95PXJU9EXp6pcbT3mKuQj7L8JuuYIC-joChM';

app.models
  .predict(model, url)
  .then(response => {
    //console.log(response.outputs[0].data.regions[0]);
    console.log(
      response.outputs[0].data.regions[0].data.face.gender_appearance
    );
  })
  .catch(error => {
    console.log(error);
  });
