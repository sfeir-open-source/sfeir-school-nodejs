<!-- .slide: class="with-code" -->

# Object initializer

*
`new Object()`, `Object.create()`, or through a literal (called an initializer)
* New ES2015 syntax
    * Shortcut for property and method names
    * Computed names for properties

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
Notes:
{ x: 0, y: 1, foo: [Function: foo], property: 'hey', truc: 'ho' }
