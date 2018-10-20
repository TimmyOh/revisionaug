const addPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') resolve(a + b);
    else reject('Must be numbers');
  });
};

// addPromise(2, 3)
//   .then(message => {
//     console.log(message);
//   })
//   .catch(error => {
//     console.log(error);
//   });

addPromise(2, 3)
  .then(result => {
    return addPromise(result, 4);
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
