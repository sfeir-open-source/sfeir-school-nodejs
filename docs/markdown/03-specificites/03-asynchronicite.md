# Javascript: asynchronicity as standard

<!-- .slide: class="with-code" -->
```javascript
// 1
console.log(1);

// 3
fs.readFile('/path/to/file', function callback() {
    console.log(3);
});

// 2
console.log(2);
```

* Asynchronous functions are non-blocking
* They are “resolved” at a later time and we can provide a callback to execute
* Some functions of the node API have a blocking version, they are indicated by “Sync” at the end of the function name

##==##


# What inside : V8 + node API + LIBUV

![w-1000](./assets/images/v8_node_api_libuv.svg)
<!-- .slide: class="full-center" -->
