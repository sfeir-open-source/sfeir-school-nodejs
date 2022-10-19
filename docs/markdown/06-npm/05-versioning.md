# npm : versioning

* According to npm we start at : 1.0.0
* Bugfix and other minor changes: **Patch** release, we increase the last number 1.0.1
    * It is considered non-breaking to upgrade or downgrade the Patch
* New non-breaking features: **Minor** release, we increase the number of the middle 1.1.0
    * It is considered non-breaking to upgrade the Minor, but potentially breaking to downgrade!
* Changes that break compatibility: **Major** release, we increase the first number 2.0.0
* <b>npm version</b>: use the npm CLI to increment the version. Create a commit if the module is in a git repo

https://docs.npmjs.com/getting-started/semantic-versioning
<!-- .element: class="credits" -->

Notes:
launch the version npm to demonstrate, npm version  | major | minor | patch
add scripts
* "patch": "npm version patch"
* "minor": "npm version minor"
* "major": "npm version major"

