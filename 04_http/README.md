L'objectif de ces exercices est de créer un serveur, lire les requêtes entrantes, former des réponses.

---

## Exercice 4.1

Créer un fichier `run-01.js` qui renvoie «coucou.js» pour toutes les requêtes.

Tips:

- Utiliser `http.createServer`

## Exercice 4.2

Créer un fichier `run-02.js` pour renvoyer la méthode et la requête que l'utilisateur a envoyées.

## Exercice 4.3

Créer un fichier `run-03.js` pour renvoyer un status 404 quand on appelle l'url `/404`

Tips:

- on peut mettre un `statusCode` sur la réponse

## Exercice 4.4

Créer un fichier `run-04.js` pour renvoyer [le logo sfeir](https://www.sfeir.com/content/themes/sfeir/img/logos/logo-sfeir-noir.svg) en réponse à une requête `GET` sur `/sfeir`

Tips:

- `http` expose aussi des méthodes pour émettre des requêtes. L'api diffère fortement de celle présente dans les browser.
- les `streams` sont des objets node que l'on peut facilement chainer, un proxy écrit en node est très simple !