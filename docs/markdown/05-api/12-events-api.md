<!-- .slide: class="with-code" -->
# API: require(‘events’)

Several node APIs inherit from `EventEmitter` (http, fs, stream).

* `emitter.addListener`(alias `on`) : attach a listener
* `emitter.emit` emit an event
* `emiiter.removeListener`(alias `off`): remove a listener

```javascript
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
 console.log('an event occurred!');
});

myEmitter.emit('event');
```

The response object of an http request exposes for example the “data” and “end” events

https://nodejs.org/api/events.html
<!-- .element: class="credits" -->

##--##
<!-- .slide: class="with-code" -->

# API: require(‘events’)

Listeners execute in declaration order and are synchronous

* `emitter.once`: to attach an earphone and detach it after the first trigger
* `emitter.removeAllListeners`: to detach all headphones
<br>
<br>

The `error` event is a special event. If no listener is attached, the script stops.

```javascript
const myEmitter = new MyEmitter();
myEmitter.emit('error', new Error('whoops!'));
// throw er; // Unhandled 'error' event
// Error: whoops!
```
