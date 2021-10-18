<!-- .slide: class="with-code" -->

# Fonctions

* Une fonction est un objet.
* Une fonction peut retourner une fonction.
* Une fonction peut être passée en argument d'une autre fonction.

```
function factory () {
  return function doSomething () {}
}
function wrapper(f) {
  f()
}
```

* Il existe aussi des arrow fonctions appelées aussi lambda.

```
const arrowFunction = () => {}
```