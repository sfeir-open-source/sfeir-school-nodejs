# Sous le capot : thread(s?)

* Design single-thread, contrairement à d’autres plateformes/langages (Java, Go…)
* Node est optimisé pour l’I/O en faisant des appels nons-bloquants (système de fichiers, appels HTTP, web sockets…)
* Possibilité d’utiliser plusieurs threads si besoin, mais généralement peu adapté à des opérations coûteuses en CPU

##==##

# Sous le capot

![full-width](./assets/images/nodejs-system.svg)
