# npm : les scripts

* Propriété **scripts** dans le fichier package.json
* On peut exécuter chaque script avec `npm run [nom du script]`
* Certains noms de scripts sont traités à part: **start**, **test**…
    * Pas besoin de `npm run` pour exécuter ces scripts: `npm` suffit.
    * Avec un cycle: **pre**start, **post**start
    * `npm test` traite les erreurs avec un autre niveau de verbosité, idéal pour les tests
    * NB: preinstall, install, postinstall (pour les compilations) peuvent être exploités comme une faille de sécurité
* Chaque script peut exécuter les binaires des modules installés comme s’il étaient dans le PATH :  ./node_modules/mocha/bin/mocha -> mocha
* On peut les orchestrer avec [npm-run-all](https://www.npmjs.com/package/npm-run-all)


Notes:
do demonstration from a npm init and add a jest test and launch script
https://jestjs.io/docs/getting-started

##--##

<!-- .slide: class="with-code" -->
# npm : les scripts


```json
{
    "scripts": {
        "sass": "node-sass ./scss/slides.scss -o ./css/ --source-map=true --watch=\"scss\" --recursive=\"scss\"",
        "sass-once": "node-sass ./scss/slides.scss -o ./css/ --source-map=true ",
        "test": "echo \"Error: no test specified\" && exit 1",
        "serve": "live-server --port=4242 --open=\"./index.html\" --watch=\"markdown/\"",
        "start": "npm-run-all --parallel serve sass",
        "copy-highlight": "cpx \"node_modules/highlight.js/styles/**/*\" \"web_modules/highlight.js/styles\" ",
        "copy-reveal": "cpx \"node_modules/reveal.js/**/*\" \"web_modules/reveal.js\" ",
        "prepare": "npm-run-all --parallel copy-reveal copy-highlight snowpack"
    }
}
```
