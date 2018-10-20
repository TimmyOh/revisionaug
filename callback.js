const getUser = (id, callback) => {
  const user = {
    id: id,
    name: 'jason'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
 
};

getUser(2, userObj => {
  console.log(userObj);
});
