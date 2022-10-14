const EventEmitter = require('events');

const Thingie = new EventEmitter();

Thingie.on('ping', () => {
  console.log('Got a ping!');

  setTimeout(() => {
    Thingie.emit('pong');
  }, 1000);
});

Thingie.on('pong', () => {
  console.log('Got a pong!');

  setTimeout(() => {
    Thingie.emit('ping');
  }, 1000);
});

Thingie.emit('ping');
