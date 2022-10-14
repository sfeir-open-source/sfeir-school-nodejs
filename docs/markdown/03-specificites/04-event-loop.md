<!-- .slide: class="with-code" -->
# What inside: event loop

<div class="row">
  <div class="column">

  ```bash
     ┌───────────────────────────┐
  ┌─>│           timers          │
  │  └─────────────┬─────────────┘
  │  ┌─────────────┴─────────────┐
  │  │     pending callbacks     │
  │  └─────────────┬─────────────┘
  │  ┌─────────────┴─────────────┐
  │  │       idle, prepare       │
  │  └─────────────┬─────────────┘      ┌───────────────┐
  │  ┌─────────────┴─────────────┐      │   incoming:   │
  │  │           poll            │<─────┤  connections, │
  │  └─────────────┬─────────────┘      │   data, etc.  │
  │  ┌─────────────┴─────────────┐      └───────────────┘
  │  │           check           │
  │  └─────────────┬─────────────┘
  │  ┌─────────────┴─────────────┐
  └──┤      close callbacks      │
     └───────────────────────────┘
  ```

  </div>
  <div class="column">

* `timers` : execute callbacks setTimeout/setInterval
* `I/O callbacks` : executes all callbacks except close, timers et setImmediate
* `idle, prepare`: internal
* `poll`: retrieving or waiting for new events I/O
* `check`: execute setImmediate callbacks
* `close callbacks` : xxx.on(‘close’, …)
* `nextTickQueue`: outside event-loop and immediately after the current operation

</div>
</div>
##==##

# The event loop and the timers

* setTimeout/setInterval
* setImmediate
* process.nextTick


The callbacks of `setTimeout` and  `setImmediate` are executed at the next cycle of the event loop.
The callbacks of `process.nextTick` is executed at the end of the current cycle of the event loop.


https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick
<!-- .element: class="credits" -->

Notes:
- Démo : bloquer l'event loop
- setTimeout : prochain cycle. on place du code en file d'attente
- setTimeout et setImmediate : on ne sait pas qui arrive en premier (demo)
- process.nextTick asap : prioritaire, ou besoin d'éxécuté du code avant prochain cyle (cleanup)

##--##
<!-- .slide: class="with-code" -->

# The event loop and the timers

```javascript
setTimeout(() => {
  console.log('timeout');
}, 0);
```
```javascript
setImmediate(() => {
  console.log('immediately executing immediate');
});
```

```javascript
const intervalObj = setInterval(() => {
  console.log('interviewing the interval');
}, 500);
clearInterval(intervalObj);
```

https://nodejs.org/en/docs/guides/timers-in-node/
<!-- .element: class="credits" -->

Notes:
- Philip Roberts https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=957s&ab_channel=JSConf
- https://nodejs.dev/learn/the-nodejs-event-loop
- https://medium.com/preezma/node-js-event-loop-architecture-go-deeper-node-core-c96b4cec7aa4

