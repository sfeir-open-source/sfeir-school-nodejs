# Les erreurs opérationnelles

<b>Les erreurs opérationnelles</b> représentent des problèmes avec le système.

* échec de la connexion au serveur
* impossible de résoudre le nom d'hôte
* entrée utilisateur invalide
* délai d'attente de la requête dépassé
* le serveur a renvoyé une réponse 500
* arrêt de la connexion du socket
* le système est à court de mémoire

Notes:
Explain with example

##==##

# Les erreurs de programmation

<b>Les erreurs de programmation</b> sont ce que nous appelons des bogues.

* appeler une fonction asynchrone sans callback
* une promesse n'a pas été résolue
* une promesse rejeté n'a pas été traitée
* passer des paramètres incorrects dans une fonction
* passer une chaîne de caractères là où un objet était attendu
* passer un objet là où une chaîne de caractères était attendue

Notes:
Explain with example

##==##<!-- .slide: class="with-code" -->
# Les exceptions

Une exception est déclenchée avec `throw`.

```javascript
throw new Error('Something bad happened')
```

ou

```javascript
class SomethingBadError extends Error {
  //...
}
throw new SomethingBadError()
```

On utilise `try/catch` pour traiter une exception.

Notes:
Bonne pratique : regarder le code d'erreur

##--##

# Les exceptions

Si une exception n'est pas traitée, le programme s'arrête et process déclenche l'évènement `uncaughtException`.

```javascript
process.on('uncaughtException', err => {
  console.error('There was an uncaught error', err)
  process.exit(1) //doit être différent de 0
})
```

##--##

# Les exceptions asynchrones

* On traite les promesses rejetées avec la méthode `catch`.
* La méthode `catch` retourne une promesse et donc utilisée dans le chaînage de promesses.
* Quand une promesse rejetée n'est pas traitée, process déclenche l'évènement `unhandledRejection`
 

```javascript
doSomething1()
  .then(doSomething2)
  .then(doSomething3)
  .catch(err => console.error(err))
```

```javascript
doSomething1()
  .catch(function(error) { handleError(error); })
  .then(function(value) { throw new Error("zut !"); })
  .catch(err => console.error(err))
```

Notes:
- Promises.reject()
- UnhandledPromiseRejectionWarning jusqu'à Node.js 15