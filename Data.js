const mongoose = require('mongoose');
const db = 'mongodb://paul:abc123@ds135003.mlab.com:35003/pauldatabase';

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to database');
  })
  .catch(error => {
    console.log('Mongoose connetion error: ', error);
  });

const schema = mongoose.Schema({
  name: {
    type: String
  },
  value: {
    type: Number
  }
});

const Data = mongoose.model('Data', schema, 'dataCollection');

module.exports = Data;
