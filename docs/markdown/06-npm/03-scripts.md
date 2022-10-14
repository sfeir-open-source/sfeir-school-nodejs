# npm : scripts

* Property **scripts** in the file package.json
* You can run each script with `npm run [nom du script]`
* Some script names are treated separately: **start**, **test**…
    * Not need `npm run` to run this scripts: `npm` is enough.
    * With cycle: **pre**start, **post**start
    * `npm test` handles errors with another level of verbosity, ideal for testing
    * NB: preinstall, install, postinstall (for builds) can be exploited as a security hole
* Each script can run binaries of installed modules as if they were in the PATH:  ./node_modules/mocha/bin/mocha -> mocha
* We can orchestrate them with [npm-run-all](https://www.npmjs.com/package/npm-run-all)

##--##

<!-- .slide: class="with-code" -->
# npm : scripts


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
