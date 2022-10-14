<!-- .slide: class="with-code" -->

# Const and let: But where are the vars?

```javascript
    var valueA = 1234;
    var valueA = 453; //NO ERROR !!!
```
<!-- .element: class="fragment" -->

<br>

```javascript
    const valueB = 1234;
    valueB = 12345; //ERROR
    let valueC = 1234;
    valueC = 12345;
    let valueC = 453; //ERROR
```
<!-- .element: class="fragment" -->

Notes:
**const** is not a real const indeed, if we const an object, we can touch the object => const it is a reference constant

##==##

<!-- .slide: class="with-code" -->

# Const and let: But where are the vars?


```javascript
if (true) {
  var j = 2;
}
console.log(j); // 2
```
<!-- .element: class="fragment" -->

<br>

```javascript
if (true) {
  let j = 2;
  console.log(j); // 2
}
console.log(j); // ERROR
```
<!-- .element: class="fragment" -->

Notes:
IIFE = Immediately Invoked Function Expression

In ES6, braces allow us to create scopes without IIFE.

The function keyword amounts to a global declaration of the function

##==##

<!-- .slide: class="with-code" -->

# Template String

We use back **quotes ``** and we can create expressions with **\${}**

```javascript
var welcome = 'Welcome';
var sujet = 'ES6';

var myTemplateHTML = '<div class="sfeirschool">\n<p>'+welcome+'</p>\n<p>'+sujet+'</p>\n</div>';

/*
"<div class="sfeirschool">
<p>Welcome</p>
<p>ES6</p>
</div>"
*/
```
<!-- .element: class="fragment" -->

##==##

<!-- .slide: class="with-code" -->

# Template String

We use back **quotes ``** and we can create expressions with **\${}**

```javascript
const welcome = 'Welcome';
const sujet = 'ES6';

const myTemplateHTML = `
<div class="sfeirschool">
<p>${welcome}</p>
<p>${sujet}</p>
</div>`;

/*
"<div class="sfeirschool">
<p>Welcome</p>
<p>ES6</p>
</div>"
*/
```
<!-- .element: class="fragment" -->

Notes:
\${} contains javascript expressions
and string templates can also be used for other things cf lit-html
