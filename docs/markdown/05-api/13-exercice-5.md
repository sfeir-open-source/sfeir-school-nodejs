<!-- .slide: class="exercice" -->
# Les évènements

## Lab

Créer un nouveau fichier run.js pour: 
* Faire un ping pong avec EventEmitter et des setTimeout !

Résultat attendu:

```bash
$ node run.js
Got a ping!
Got a pong!
Got a ping!
Got a pong!
```

##==##
<!-- .slide: class="exercice with-code max-height" -->
# Les évènements : Solution

## Lab

```javascript []
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
```