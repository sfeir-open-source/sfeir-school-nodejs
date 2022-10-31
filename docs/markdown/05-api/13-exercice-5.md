<!-- .slide: class="exercice" -->

# Events

## Lab

<b>exercices/05_event_emitter</b>

Write a `run.js` program that uses the `events` module to create a new `EventEmitter` which when it receives a "ping" event displays "Got a ping!" and returns a "pong" event after one second.

When receiving "pong", display "Got a pong!" and return a "ping" event after one second.

##==##

<!-- .slide: class="exercice" -->

# Events : Solution

## Lab

<b>exercices/05_event_emitter-solution/run.js</b>

```javascript
const EventEmitter = require("events");
const Thingie = new EventEmitter();
Thingie.on("ping", () => {
  console.log("Got a ping!");
  setTimeout(() => {
    Thingie.emit("pong");
  }, 1000);
});
Thingie.on("pong", () => {
  console.log("Got a pong!");
  setTimeout(() => {
    Thingie.emit("ping");
  }, 1000);
});
Thingie.emit("ping");
```
