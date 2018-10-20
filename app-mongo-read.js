const Data = require('./Data');

//find : finds all
//findOne: find the first match
const query = {};

Data.find(query)
  .sort({ name: 'asc' })
  .then(response => {
    console.log(response);
  })

  .catch(error => {
    console.log('Mongoose read error: ', error);
  });
