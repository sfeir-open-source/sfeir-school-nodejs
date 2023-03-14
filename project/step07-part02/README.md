# Sfeir Schools

## Step 7 Partie 2

Nous allons utiliser [passport](https://www.passportjs.org/) pour gérer les histoires d'authentification.

Passport.js est une bibliothèque d'authentification pour Node.js qui permet de gérer l'authentification d'un utilisateur dans une application web. Il facilite la mise en place de différentes stratégies d'authentification, telles que l'authentification locale avec des identifiants et mots de passe, l'authentification via des réseaux sociaux comme Facebook ou Twitter, ou encore l'authentification via des fournisseurs d'identité tels que Google ou GitHub.

### 1. Passport - Stratégie authentification locale

Commençons par créer une stratégie avec [passport-local](https://www.passportjs.org/packages/passport-local/):

- Ajouter le middleware global `passport.initialize()` à express.
- Utiliser la fonction `findUser` du module `user.js` pour déclarer une `LocalStrategy`
- Ajouter le middleware `passport.authenticate("local")` pour la route d'authentification `/login`.

Au cas où: [un peu de doc](https://github.com/jwalton/passport-api-docs) en plus.

### 2. Passport - application

- Créer un middleware qui vérifie qu'un utilisateur est connecté ([hint](https://github.com/jaredhanson/passport/blob/882d65e69d5b56c6b88dd0248891af9e0d80244b/lib/http/request.js#L83)) et utiliser ce middleware pour protéger le POST sur `/`.
  

### 3. Gestion de session

Les sessions utilisateur sont gérées par le middleware [express-session](https://github.com/expressjs/session). Par défaut les sessions sont stockées en mémoire (ce qui n'est pas recommandé pour la production)

- configurer `Passport` pour qu'il utilise les sessions : [`passport.session()`](https://github.com/jwalton/passport-api-docs/tree/18f7336ce91f0300068c944197017c0815d71b5f#passportsessionoptions).
- ajouter la méthode `serializeUser` de `passport` pour sérializer le user dans la session.
- ajouter la méthode `deserializeUser` de `passport` pour desérializer le user à partir de la session.
- ajouter le middleware expression-session. Le secret sera la valeur `SFEIR`.

### Pour essayer tout ça:

- Créer un user: `http POST http://localhost:3000/register username="Siegfried" password="plop"`.
- Lister les Sfeir Schools: `http http://localhost:3000/`.
- Tenter de créer une Sfeir School: `http POST http://localhost:3000/ title="Sfeir School NodeJS"`. On doit avoir un 401.
- Faire un login: `http --session=/tmp/session.json POST http://localhost:3000/login username="Siegfried" password="plop"`. Le `--session=/tmp/session.json` permet de persister les cookies etc.
- On crée pour de vrai une Sfeir School: `http --session=/tmp/session.json POST http://localhost:3000/ title="Sfeir School NodeJS"`.
- Lister les Sfeir Schools: `http http://localhost:3000/` pour voir notre nouvelle Sfeir School !
