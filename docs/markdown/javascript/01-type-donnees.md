<!-- .slide:-->

# Data type

- weak and dynamic typing
- Primitive data :
    * **null**
    * **undefined**
    * **number**: 1, 1.4, -1e4, NaN
    * **string**: 'str', "str", `` `template str ${value}` ``
    * **boolean**: true, false
    * **symbol** (new in ES2015): let sym = Symbol('toto');
- For the rest, all is an object

Notes:
https://developer.mozilla.org/en-US/docs/Glossary/Primitive

JavaScript is a weakly typed language. It has a notion of types, but it's relaxed about them, and can treat values somewhat arbitrary.
Statically typed languages check the types and look for type errors during compile time.
Dynamically typed languages check the types and look for type errors during runtime.

