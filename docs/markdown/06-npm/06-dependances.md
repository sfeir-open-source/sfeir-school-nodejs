<!-- .slide: class="with-code" -->
# npm : dependencies

* [dependencies](https://docs.npmjs.com/files/package.json#dependencies) : necessary to operate the package or application
* [devDependencies](https://docs.npmjs.com/files/package.json#devdependencies) : necessary to develop (tests, build system…)

Install by version :

```json
{
    "dependencies" : {
        "foo" : "1.0.0 - 2.9999.9999", 
        "bar" : ">=1.0.2 <2.1.2", 
        "baz" : ">1.0.2 <=2.3.4", 
        "boo" : "2.0.1", 
        "qux" : "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0", 
        "asd" : "http://asdf.com/asdf.tar.gz", 
        "dgy" : "^2.0.1", 
        "til" : "~1.2", 
        "elf" : "~1.2.3", 
        "two" : "2.x", 
        "thr" : "3.3.x", 
        "lat" : "latest", 
        "dyl" : "file:../dyl"
    }
}
```

https://docs.npmjs.com/files/package.json
<!-- .element: class="credits" -->
