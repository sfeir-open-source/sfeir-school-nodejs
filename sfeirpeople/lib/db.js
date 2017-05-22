const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/sfeirpeople';

let db, col;

MongoClient.connect(url, function (err, newDb) {
  if (err) {
    throw new err;
  } else {
    console.log("Connected correctly to server");
    db = newDb;
    col = db.collection('people');

    // init((err, r) => {
    //   if (err) {
    //     console.log('fail to init', err);
    //     close();
    //     process.exit(1)
    //   } else {
    //     console.log('init ok !');
    //   }
    // });
  }
});

function init(cb) {
  if (!db) {
    cb(new Error('No DB found'));
  } else {
    const people = require('../data/persons');
    col.insert(people, cb);
  }
}

function close() {
  db && db.close();
}

module.exports = {
  getCol() {
    return col;
  },
  close
};
