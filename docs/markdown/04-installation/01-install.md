<!-- .slide: -->

# Install Node.js


* Not recommended with a package manager (apt-get, Brew, Chocolatey)
* Installing from the website [Node.js](https://nodejs.org/en/download/), but it's required admin right (`sudo`)
* <b>Node Version Manager</b> Recommended with you have project with different version


Notes:
- package manager = retard de version et require sudo

##--##

<!-- .slide: class="with-code" -->

# Node version manager

<br>

* Install a version

```bash
 nvm install 14
```

* Use a version

```bash
 nvm use 14
```

* Verify the Node.js version

```bash
 node -v
```

##--##

# Node version manager pour Windows

* [nvm-windows](https://github.com/coreybutler/nvm-windows)
* [nvs](https://github.com/jasongin/nvs/releases) (recommended)

install with msi the nvs https://github.com/jasongin/nvs/releases

```bash
 nvs add 14
```

* Use a version

```bash
 nvs use 14
```

* Verify the Node.js version

```bash
 node --version
```
