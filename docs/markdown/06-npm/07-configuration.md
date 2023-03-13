# npm : la configuration

* Fichier .npmrc
    * [save-prefix](https://docs.npmjs.com/misc/config#save-prefix): <b>^</b>, <b>~</b> or <b>''</b> pour la version des dépendances dans le package.json
    * [proxy](https://docs.npmjs.com/misc/config#proxy) et [https-proxy](https://docs.npmjs.com/misc/config#https-proxy): permet de configurer un proxy
* `npm config list` (ou ls): pour lister les éléments du .npmrc
* `npm config list -l` (ou ls): pour lister tous les éléments de config

https://docs.npmjs.com/misc/config
<!-- .element: class="credits" -->

Notes:
add in file save-prefix=~
add in file for proxy
proxy=http://<username>:<pass>@proxyhost:<port>
https-proxy=http://<uname>:<pass>@proxyhost:<port>