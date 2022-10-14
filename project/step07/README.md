# Sfeir Schools

## Step 7

Authentication!

It's time to talk about [middlewares in Express](https://expressjs.com/en/guide/using-middleware.html). There are 2 types:

- Basic middleware (signature: `function(req, res, next) {...}`).
- Error middleware (signature: `function(err, req, res, next) {...}`).

The order of use of middleware is important!

### 1. Routes

We will create two routes:

- `/register` to create accounts.
- `/login` for login.

We will use a core module from Node: [crypto](https://nodejs.org/dist/latest-v14.x/docs/api/crypto.html). It provides us with [scrypt](https://nodejs.org/dist/latest-v14.x/docs/api/crypto.html#crypto_crypto_scrypt_password_salt_keylen_options_callback) for password generation.

### 2. Passport - Strategy

We will be using [passport](https://www.passportjs.org/) to handle authentication histories.

Let's start by creating a policy with [passport-local](https://www.passportjs.org/packages/passport-local/):
- In the `user.js` file, we will create a `strategy` which will dig into the database.

### 3. Passport - application

- Add `passport.initialize()` global middleware to express.
- Add the `passport.authenticate("local")` middleware for the authentication route for the `/login`.
- Protect the route to create a Sfeir School with middleware that verifies a user is logged in ([hint](https://github.com/jaredhanson/passport/blob/882d65e69d5b56c6b88dd0248891af9e0d80244b/lib/http/request.js#L83)))

Just in case: [some doc](https://github.com/jwalton/passport-api-docs) extra.

### 4. Session management

User sessions are managed by the middleware [express-session](https://github.com/expressjs/session). By default sessions are stored in memory (which is not recommended for production)

- We will need [`passport.session()`](https://github.com/jwalton/passport-api-docs/tree/18f7336ce91f0300068c944197017c0815d71b5f#passportsessionoptions).
- the `serializeUser` method of passport to serialize the user in the session.
- the `deserializeUser` method of passport to deserialize the user from the session.

### To try:

- Create an user: `http POST http://localhost:3000/register username="Siegfried" password="plop"`.
- List the sfeir schools: `http http://localhost:3000/`.
- Attempt to create a Sfeir School: `http POST http://localhost:3000/ title="Sfeir School NodeJS"`. We must have a 401.
- Do a Login: `http --session=/tmp/session.json POST http://localhost:3000/login username="Siegfried" password="plop"`. The `--session=/tmp/session.json` allows to persist cookies etc.
- We create for real a Sfeir School: `http --session=/tmp/session.json POST http://localhost:3000/ title="Sfeir School NodeJS"`.
- List the Sfeir Schools: `http http://localhost:3000/` to see our new Sfeir School!

### Environment variable

- Create a `SALT` environment variable for `scrypt`
- To ensure compatibility between operating systems, we use [cross-env](https://www.npmjs.com/package/cross-env).
