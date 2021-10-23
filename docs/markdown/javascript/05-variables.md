<!-- .slide: class="with-code" -->

# Const et let : Mais où sont les var ?

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
**const** n'est pas une vrai const en effet, si on const un objet, on pourra toucher à l'objet => const c'est une constante de référence

##==##

<!-- .slide: class="with-code" -->

# Const et let : Mais où sont les var ?


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

en ES6, les accolades nous permettent de créer des scopes sans IIFE.

Le mot clé function revient à une déclaration globale de la fonction

##==##

<!-- .slide: class="with-code" -->

# Template String

On utilise les back **quotes ``** et on peut créer des expressions avec **\${}**

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

On utilise les back **quotes ``** et on peut créer des expressions avec **\${}**

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
\${} contient des expressions javascript

et les templates string peuvent aussi servir pour autre chose cf lit-html