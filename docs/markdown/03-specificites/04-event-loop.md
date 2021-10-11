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
<!-- .slide: class="flex-row" -->

# Sous le capot : event loop

https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick