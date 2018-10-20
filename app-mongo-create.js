const Data = require('./Data');

const data = new Data({
  name: 'Cathy',
  value: 44
});

data
  .save()
  .then(response => {
    console.log('Mongoose save successful: ', response);
  })
  .catch(error => {
    console.log('Mongoose save error: ', error);
  });
