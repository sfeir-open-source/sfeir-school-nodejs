<!-- .slide: class="two-column-layout"-->

# Javascript: l’asynchronicité comme standard

##--##
<!-- .slide: class="with-code" -->
```javascript
// 1
console.log(1);

// 3
fs.readFile('/path/to/file', function callback() {
    console.log(3);
});

// 2
console.log(2);
```
##--##

* Les fonctions asynchrones sont non-bloquantes
* Elles sont “résolues” à un moment ultérieur et on peut fournir un callback à exécuter
* Certaines fonctions de l’API node ont une version bloquante, elles sont signalées par “Sync” à la fin du nom de fonction

##==##
<!-- .slide: class="full-center" -->

# Sous le capot  : V8 + node API + LIBUV

![w-1000](./assets/images/v8_node_api_libuv.png)

##==##
<!-- .slide: class="with-code" -->

# Sous le capot : event loop

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

##==##

# Sous le capot : event loop

* timers : exécute les callbacks setTimeout/setInterval
* I/O callbacks : exécute tous les callbacks sauf close, timers et setImmediate
* idle, prepare: interne
* poll: récupération ou attente de nouveaux événements I/O
* check: exécute les callback setImmediate
* close callbacks : xxx.on(‘close’, …)
* nextTickQueue: hors event-loop et immédiatement après l’opération en cours

https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick