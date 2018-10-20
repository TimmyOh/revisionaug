const Data = require('./Data');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// client POST localhost/postcreate  x-www-form-urlencoded
app.post('/postcreate', (req, res) => {
  const data = new Data({
    name: req.body.name,
    value: req.body.value
  });
  data
    .save()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(200).json(error);
    });
});

app.get('/getalldata', (req, res) => {
  Data.find({}).then(response => {
    res.status(200).send(response);
  });
});

// client GET localhost/create?name=Alice&value=555
app.get('/create', (req, res) => {
  const data = new Data({
    name: req.query.name,
    value: req.query.value
  });
  data
    .save()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(200).json(error);
    });
});

//localhost:5000/delete?name=Foo
app.get('/delete', (req, res) => {
  const query = { name: req.query.name };
  Data.deleteMany(query)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
