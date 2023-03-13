# Environnement de production

* Signaler Node.js que l'on tourne en production
    * `export NODE_ENV=production`

<br>
<br>

```javascript
if (process.env.NODE_ENV === "production") {
  //...
}
```

* `npm install --production` ignore les `devDependencies`
* `cross-env` pour le multi plate-forme

```
`"build:deploy": "cross-env NODE_ENV=production node index.js"`
```

##--##

# Le gestionnaire de processus PM2

Démarre une application Node.js en mode cluster

* `npm install -g pm2`
* `pm2 start server.js  -i 0 --name "my-app"` : i est le nombre de processus à générer
* `pm2 list`
* `pm2 stop my-app`
* `pm2 restart my-app`

##--##

# Forever

Surveille une application Node.js et la redémarre si elle bloque

* `npm install -g forever`
* `forever start server.js`
