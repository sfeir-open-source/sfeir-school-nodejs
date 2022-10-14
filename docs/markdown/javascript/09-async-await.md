<!-- .slide: -->

# Async/Await

- Use promises in synchronous writing style

##==##

<!-- .slide: class="with-code" -->

# Async/Await

- Before the async function, the problem of asynchronicity

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

- Simplified writing for increased readability

```javascript
function logData() {
  return getData().then((result) => {
    console.log(result);
  });
}
// ES2015 | We use a promise
```


```javascript
async function logData() {
    const result = await getData();
    console.log(result);
} 

// ES2017 | We use async/await
```
