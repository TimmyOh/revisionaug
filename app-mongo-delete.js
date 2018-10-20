const Data = require('./Data');

const query = {
  name: 'Cathy'
};
Data.deleteMany(query)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
