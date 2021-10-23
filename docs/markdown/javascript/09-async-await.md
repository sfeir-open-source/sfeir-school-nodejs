<!-- .slide: -->

# Async/Await

- Utiliser des promesses dans un style d'écriture synchrone

##==##

<!-- .slide: class="with-code" -->

# Async/Await

- Avant la fonction async, le problème de l'asynchronicité

```javascript
function getData() {
  var data;
  request('http://whatever/data', function (error, response, body) {
    data = body;
  });
  return data;
}
```

```javascript
function main() {
  var data = getData();
  console.log(data); // undefined
}
```

##==##

<!-- .slide: class="with-code" -->

# Async/Await

- Une écriture simplifiée pour une lisibilité accrue

```javascript
function logData() {
  return getData().then((result) => {
    console.log(result);
  });
}
// ES2015 | On utilise une promesse
```


```javascript
async function logData() {
    const result = await getData();
    console.log(result);
} 

// ES2017 | On utilise async/await
```
