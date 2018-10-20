const somePromise = new Promise((resolve, reject) => {
  const cando = true;
  if (cando == true) resolve('Ok');
  else reject('sorry');
});

somePromise
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.log(error);
  });
