# npm : configuration

* .npmrc file
    * [save-prefix](https://docs.npmjs.com/misc/config#save-prefix):  ^, ~ or '' for dependencies version in package.json
    * [proxy](https://docs.npmjs.com/misc/config#proxy) et [https-proxy](https://docs.npmjs.com/misc/config#https-proxy): allows you to configure a proxy
* `npm config list` (ou ls): to list the elements of the .npmrc
* `npm config list -l` (ou ls): to list all config items

https://docs.npmjs.com/misc/config
<!-- .element: class="credits" -->


##--##

<!-- .slide: class="with-code" -->
# npm : configuration

* give access to a github private repository 
* you need a token github with the read:packages access
 
```
//npm.pkg.github.com/:_authToken=XXXXXXX
@myPrivateRepository:registry=https://npm.pkg.github.com

```
