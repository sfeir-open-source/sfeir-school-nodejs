const crypto = require('crypto');

start_time = process.hrtime();
const salt = crypto.randomBytes(128).toString('base64');
const hash = crypto.pbkdf2Sync('myPassword', salt, 10000, 512, 'sha512');
took = process.hrtime(start_time);
console.log('crypto took ' + took + ' seconds');
