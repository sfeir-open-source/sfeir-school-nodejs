<!-- .slide: -->

# Installer Node.js


* Déconseillé avec un package manager (apt-get, Brew, Chocolatey)
* Déconseillé de l'installer depuis le site Node.js car requiert des droits d'administrateur (`sudo`)
* Recommandé avec <b>Node Version Manager</b>


Notes:
- package manager = retard de version et requiert sudo

##--##

<!-- .slide: class="with-code" -->

# Node version manager

<br>

* Installer un version

```bash
 nvm install 14
```

* Utiliser une version

```bash
 nvm use 14
```

* Vérifier la version de Node.js

```bash
 node -v
```

##--##

# Node version manager pour Windows

* [nvm-windows](https://github.com/coreybutler/nvm-windows)
* [nvs](https://github.com/jasongin/nvs/releases) (recommandé)