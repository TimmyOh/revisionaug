const Data = require('./Data');

const array = [
  {
    name: 'Adam',
    value: 11
  },
  {
    name: 'Cathy',
    value: 33
  }
];

Data.insertMany(array)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
