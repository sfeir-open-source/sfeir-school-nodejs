<!-- .slide: class="with-code" -->
# Les API: require(‘events’)

Plusieurs API de node héritent de `EventEmitter` (http, fs, stream).

* `emitter.addListener`(alias `on`) : attache un écouteur
* `emitter.emit` déclenche un évènement
* `emiiter.removeListener`(alias `off`): détache un écouteur

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

https://nodejs.org/api/events.html
<!-- .element: class="credits" -->

##--##
<!-- .slide: class="with-code" -->

# Les API: require(‘events’)

Les listeners s'éxécutent dans l'ordre de déclaration et sont synchrones

* `emitter.once`: pour attacher un écouteur et le détacher après le premier déclenchement
* `emitter.removeAllListeners`: pour détacher tous les écouteurs
<br>
<br>

L'évènement `error` est un évènement spécial. Si aucun écouteur n'est attaché, le script s'arrête.

```javascript
const myEmitter = new MyEmitter();
myEmitter.emit('error', new Error('whoops!'));
// throw er; // Unhandled 'error' event
// Error: whoops!
```