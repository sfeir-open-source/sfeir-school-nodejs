# Sfeir Schools

## Step 4

On code tous pareil dans une équipe !

- On va utiliser [prettier](https://prettier.io/) (on peut aussi [l'intégrer avec ESLint](https://prettier.io/docs/en/eslint.html)).
- On installe prettier en `devDependencies`.
- On ajoute un script: `"lint: "prettier --write lib/**/*.js index.js"`.
- Lancer avec `npm run lint`.