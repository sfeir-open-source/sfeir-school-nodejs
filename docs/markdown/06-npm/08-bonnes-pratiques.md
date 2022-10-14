# Best Practices : Dependencies

* `package-lock.json` is automatically generated and added to source control
* [npm outdated](https://docs.npmjs.com/cli/outdated) to show outdated dependencies
* [npm update](https://docs.npmjs.com/cli/update) to update dependencies
* [npm-check](https://www.npmjs.com/package/npm-check) for an interactive update `npm-check -u`
* [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) to update everything `ncu -u`

Notes:
- package-lock.json since version 5 replaces the shrinkwrap.
- package-lock.json present in source control
- npm install: same version as package-lock.json
- npm-shrinkwrap.json: present with the code published on npm
