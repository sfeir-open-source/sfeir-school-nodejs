const service = (db) => {
  function findUser(username, password, callback) {
    // TODO retrieve a user from the database
  }

  function saveUser(username, password, callback) {
    // TODO save a user in the database
    // crypto.scrypt('password', 'salt', 64, (err, derivedKey) => {
    //   if (err) throw err;
    //      console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
    // });
  }
  return {
    findUser,
    saveUser,
  };
};

module.exports = service;
