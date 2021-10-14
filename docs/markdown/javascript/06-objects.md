<!-- .slide: class="with-code" -->

# Initialisateur d'objet

* `new Object()`, `Object.create()`, ou grâce à un littéral (appelée initialisateur)
* Nouvelle syntaxe ES2015
    * Raccourci pour les noms de propriétés et méthodes
    * Noms calculés pour les propriétés

```javascript
let x = 0, y = 1;
const prop = "property";
const object = {
    x, y,
    foo (x, y) { },
    [prop]: "hey",
    ["tr" + "uc"]: "ho",
};
```
