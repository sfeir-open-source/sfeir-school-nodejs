# Sfeir Schools

## Step 7

Authentification !

C'est le moment de parler des [middlewares dans Express](https://expressjs.com/en/guide/using-middleware.html). Il y en a 2 types:

- Les middlewares de base (signature: `function(req, res, next) {...}`).
- Les middlewares d'erreur (signature: `function(err, req, res, next) {...}`).

L'ordre d'usage des middlewares est important !

### 1. Routes

On va créer deux routes:

- `/register` pour créer les comptes.
- `/login` pour la connexion.

On va utiliser un module core de Node: [crypto](https://nodejs.org/dist/latest-v14.x/docs/api/crypto.html). Il nous fournit [scrypt](https://nodejs.org/dist/latest-v14.x/docs/api/crypto.html#crypto_crypto_scrypt_password_salt_keylen_options_callback) pour ce qui est de la génération des mots de passe.

### 2. Passport - Stratégie

Nous allons utiliser [passport](https://www.passportjs.org/) pour gérer les histoires d'authentification.

Commençons par créer une stratégie avec [passport-local](https://www.passportjs.org/packages/passport-local/):
- Dans le fichier `user.js`, on va créer une `strategy` qui va fouiller dans la base.

### 3. Passport - application

- Ajouter le middleware global `passport.initialize()` à express.
- Ajouter le middleware `passport.authenticate("local")` pour la route d'authentification pour la `/login`.
- Protéger la route pour créer une Sfeir School avec un middleware qui vérifie qu'un utilisateur est connecté ([hint](https://github.com/jaredhanson/passport/blob/882d65e69d5b56c6b88dd0248891af9e0d80244b/lib/http/request.js#L83)).
  
Au cas où: [un peu de doc](https://github.com/jwalton/passport-api-docs) en plus.

### 4. Gestion de session

Les sessions utilisateur sont gérées par le middleware [express-session](https://github.com/expressjs/session). Par défaut les sessions sont stockées en mémoire (ce qui n'est pas recommandé pour la production)

- On aura besoin de [`passport.session()`](https://github.com/jwalton/passport-api-docs/tree/18f7336ce91f0300068c944197017c0815d71b5f#passportsessionoptions).
- de la méthode `serializeUser` de passport pour sérializer le user dans la session.
- de la méthode `deserializeUser` de passport pour desérializer le user à partir de la session.

### Pour essayer tout ça:

- Créer un user: `http POST http://localhost:3000/register username="Siegfried" password="plop"`.
- Lister les Sfeir Schools: `http http://localhost:3000/`.
- Tenter de créer une Sfeir School: `http POST http://localhost:3000/ title="Sfeir School NodeJS"`. On doit avoir un 401.
- Faire un login: `http --session=/tmp/session.json POST http://localhost:3000/login username="Siegfried" password="plop"`. Le `--session=/tmp/session.json` permet de persister les cookies etc.
- On crée pour de vrai une Sfeir School: `http --session=/tmp/session.json POST http://localhost:3000/ title="Sfeir School NodeJS"`.
- Lister les Sfeir Schools: `http http://localhost:3000/` pour voir notre nouvelle Sfeir School !

### Variable d'environnement

- Créer une variable d'environnement `SALT` pour `scrypt`.
- Pour assurer la compatibilité entre systèmes d'exploitations, on utilise [cross-env](https://www.npmjs.com/package/cross-env).
