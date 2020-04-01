# Les API: require(‘events’)

Plusieurs API de node sont construites autour des events afin de permettre une communication asynchrone
```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
 console.log('an event occurred!');
});

myEmitter.emit('event');
```

L’objet response d’une requête http expose par exemple les events “data” et “end”

https://nodejs.org/dist/latest-v6.x/docs/api/events.html