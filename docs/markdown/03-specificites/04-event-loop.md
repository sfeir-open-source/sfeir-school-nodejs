<!-- .slide: class="two-column max-height with-code" -->
# Sous le capot : l'event loop

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
##--##

#

* `timers` : exécute les callbacks setTimeout()/setInterval()
* `I/O callbacks` : exécute tous les callbacks sauf close, timers et setImmediate()
* `idle, prepare`: interne
* `poll`: récupération ou attente de nouveaux événements I/O
* `check`: exécute les callback setImmediate
* `close callbacks` : xxx.on(‘close’, …)

* `nextTickQueue`: hors event-loop et immédiatement après l’opération en cours


##==##
<!-- .slide: class="with-code" -->
# Sous le capot: blocage de l'event loop 

* Les opérations longues peuvent bloquer l'event loop

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
<!-- .slide: class="with-code" -->

# L'event loop et les timers

* setTimeout()/setInterval()
* setImmediate()
* process.nextTick()


Les callbacks de `setTimeout()` et `setImmediate()` sont exécutés au prochain cycle de l'event loop.
Le callback de `process.nextTick()` est exécuté à la fin du cycle courant de l'event loop.


https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick
<!-- .element: class="credits" -->

Notes:
- Démo : bloquer l'event loop
- setTimeout : prochain cycle. on place du code en file d'attente
- setTimeout et setImmediate : on ne sait pas qui arrive en premier (demo)
- process.nextTick asap : prioritaire, ou besoin d'éxécuté du code avant prochain cyle (cleanup)

##--##
<!-- .slide: class="with-code" -->

# L'event loop et les timers

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

