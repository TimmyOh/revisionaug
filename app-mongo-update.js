const Data = require('./Data');

const query = { name: 'Cathy' };
const update = { value: 55 };

// updateMany:  updates all mathes
// findOneAndUpdate: updates the first match
Data.updateMany(query, update)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
