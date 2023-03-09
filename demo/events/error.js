
const { EventEmitter } = require('events')
const myEmitter = new EventEmitter();
myEmitter.emit('error', new Error('whoops!'));
// Throws and crashes Node.js