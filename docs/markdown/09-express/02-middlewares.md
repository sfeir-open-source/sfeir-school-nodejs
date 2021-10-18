# Les middlewares Express

Les middlewares permettent le chaînage de plusieurs fonctions

Cas d’application :
* Log de toutes les requêtes
* Métriques
* Authentification
* Gestion des erreurs
* Routing

##==##

# Les middlewares Express

* 2 types de middlewares :
    * middleware “classique” : `function (req, res, next)`
    * middleware d’erreur : `function (err, req, res, next)` appelée si une erreur est remontée par un middleware précédent

<br>

* `next` : fonction permettant le chaînage de middleware. On appelle le middleware suivant avec `next()`, et potentiellement le prochain middleware d’erreur avec `next(err)`

##==##
<!-- .slide: class="full-center" -->

# Les middlewares Express

![full-width](./assets/images/express_middlewares.svg)