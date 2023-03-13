# Sous le capot : thread(s?)

* Design single-thread, contrairement à d’autres plateformes/langages (Java, Go…)
* Node est optimisé pour l’I/O en faisant des appels nons-bloquants (système de fichiers, appels HTTP, web sockets…)
* Possibilité d’utiliser plusieurs threads si besoin, mais généralement peu adapté à des opérations coûteuses en CPU

Notes:
https://www.youtube.com/watch?v=jOupHNvDIq8 for the kitchen example
- The server is taking order from table 1, it give it to kitchen. 
- He needs to wait that the kitchen finish the dish. 
- He will take the order of the table 2.
- When the dish is finish from kitchen, he will give it to table 1 and table 2

##==##

# Sous le capot

![full-width](./assets/images/nodejs-system.svg)