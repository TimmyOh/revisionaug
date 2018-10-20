const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: '6a46fac341114f3297b13dda3188bf10'
});

const model = 'e0be3b9d6a454f0493ac3a30784001ff';

const url =
  'https://www.jomashop.com/media/catalog/product/cache/1/small_image/360x/9df78eab33525d08d6e5fb8d27136e95/c/i/citizen-promaster-diver-blue-dial-men_s-stainless-steel-watch-bn0191-55l.jpg';

app.models
  .predict(model, url)
  .then(response => {
    console.log(response.outputs[0].data);
  })
  .catch(error => {
    console.log(error);
  });
