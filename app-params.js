const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

// localhost/create?name=Alice&value=111
app.get('/create', (req, res) => {
  const obj = {
    name: req.query.name,
    value: req.query.value
  };
  console.log(obj);
  res.status(200).json(obj);
});

// client POST localhost/data  x-www-form-urlencoded
// name=Betty value=223
app.post('/postcreate', (req, res) => {
  const obj = {
    name: req.body.name,
    value: req.body.value
  };
  console.log(obj);
  res.status(200).json(obj);
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
