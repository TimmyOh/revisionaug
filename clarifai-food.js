const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: '6a46fac341114f3297b13dda3188bf10'
});

const model = 'bd367be194cf45149e75f01d59f77ba7';

const url =
  'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_602,c_fill,g_auto,h_339,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170302145011-penang-assam-laksa-malaysia.jpg';

app.models
  .predict(model, url)
  .then(response => {
    console.log(response.outputs[0].data);
  })
  .catch(error => {
    console.log(error);
  });
