<!-- .slide: class="two-column-layout"-->

# Sous le capot : event loop

##--##
<!-- .slide: class="with-code" -->
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

* `timers` : exécute les callbacks setTimeout/setInterval
* `I/O callbacks` : exécute tous les callbacks sauf close, timers et setImmediate
* `idle, prepare`: interne
* `poll`: récupération ou attente de nouveaux événements I/O
* `check`: exécute les callback setImmediate
* `close callbacks` : xxx.on(‘close’, …)
* `nextTickQueue`: hors event-loop et immédiatement après l’opération en cours

##==##
<!-- .slide: -->

# L'event loop et les timers

* setTimeout/setInterval
* setImmediate
* process.nextTick


Les callbacks de `setTimeout` et `setImmediate` sont exécutés au prochain cycle de l'event loop.
Le callback de `process.nextTick` est exécuté à la fin du cycle courant de l'event loop.


https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick
<!-- .element: class="credits" -->

Notes:
- Démo : bloquer l'event loop
- setTimeout et setImmediate : on ne sait pas qui arrive en premier
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

