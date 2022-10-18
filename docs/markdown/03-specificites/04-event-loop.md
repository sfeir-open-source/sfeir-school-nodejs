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

* `timers` : execute callbacks setTimeout() and setInterval()
* `I/O callbacks` : executes I/O callbacks deferred to the next loop iteration. except close, timers et setImmediate
* `idle, prepare`: only used internally
* `poll`: retrieving or waiting for new events I/O
* `check`: execute setImmediate() callbacks
* `close callbacks` : some close callbacks like xxx.on(‘close’, …)
* `nextTickQueue`: outside event-loop and immediately after the current operation

</div>
</div>

##--##
<!-- .slide: class="with-code" -->
# What inside: blocking the event loop 

* Long operation can block the event loop

```javascript
const crypto = require('crypto');

start_time = process.hrtime();
const salt = crypto.randomBytes(128).toString('base64');
const hash = crypto.pbkdf2Sync('myPassword', salt, 10000, 512, 'sha512');
took = process.hrtime(start_time);
console.log('crypto took ' + took + ' seconds');
console.log(hash);
```

Notes:
- Demo: block the event loop
- JSON.parse and JSON.stringify are other potentially expensive operations. These two methods have a complexity of O(n) where n is the length of your JSON object., for large n they can take surprisingly long.
- If a thread is taking a long time to execute a callback (Event Loop) or a task (Worker), it’s called “blocked”. While a thread is blocked working on behalf of one client, it cannot handle requests from any other clients.


##==##

# The event loop and the timers

* setTimeout()/setInterval()
* setImmediate()
* process.nextTick()


The callbacks of `setTimeout()` and  `setImmediate()` are executed at the next cycle of the event loop.
The callbacks of `process.nextTick()` is executed at the end of the current cycle of the event loop.


https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick
<!-- .element: class="credits" -->

Notes: 
- setTimeout: next cycle. on the place of the queued code
- setTimeout and setImmediate: we don't know which comes first (demo)
- process.nextTick asap: priority, or need to execute code before next cycle (cleanup)

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

