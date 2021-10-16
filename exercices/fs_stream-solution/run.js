const fs = require('fs');
const path = require('path');

const options = {
  encoding: 'utf-8',
  highWaterMark: 4
};
const fromPath = path.resolve(__dirname, 'coucou.txt');
const folder = path.resolve(__dirname, 'jtutu');
const toPath = path.resolve(folder, 'coucou.txt');

console.log(fromPath);

fs.mkdir(folder, function (err) {
  if (err && err.code !== 'EEXIST') throw err;
  fs.createReadStream(fromPath).pipe(fs.createWriteStream(toPath));
});
