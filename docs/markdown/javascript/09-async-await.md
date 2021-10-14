<!-- .slide: -->

# Async/Await

<br/>
<br/>
<br/>
<br/>

- Utiliser des promesses dans un style d'écriture synchrone

##==##

<!-- .slide: class="two-column-layout" -->

# Async/Await

- **Avant la fonction async, le problème de l'asynchronicité**

##--##

<!-- .slide: class="with-code" -->

<br/>
<br/>

```javascript
function getData() {
  var data;
  request('http://whatever/data', function (error, response, body) {
    data = body;
  });
  return data;
}
```

##--##

<!-- .slide: class="with-code" -->

<br/>
<br/>

```javascript
function main() {
  var data = getData();
  console.log(data); // undefined
}
```

##==##

<!-- .slide: class="two-column-layout" -->

# Async/Await

- **Une écriture simplifiée pour une lisibilité accrue**

##--##

<!-- .slide: class="with-code" -->

<br/>
<br/>

```javascript
function logData() {
  return getData().then((result) => {
    console.log(result);
  });
}
// ES2015 | On utilise une promesse
```

##--##

<!-- .slide: class="with-code" -->

<br/>
<br/>

```javascript
async function logData() {
    const result = await getData();
    console.log(result);
} 

// ES2017 | On utilise async/await
```
