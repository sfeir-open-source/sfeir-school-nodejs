# production environment

* Report Node.js that we are running in production
    * `export NODE_ENV=production`

<br>
<br>

```javascript
if (process.env.NODE_ENV === "production") {
  //...
}
```

* `npm install --production` ignore `devDependencies`
* `cross-env` for multi-platform

```
`"build:deploy": "cross-env NODE_ENV=production node index.js"`
```

##--##

# The PM2 process manager

Starts a Node.js application in cluster mode

* `npm install -g pm2`
* `pm2 start server.js  -i 0 --name "my-app"` : i is the number of processes to spawn
* `pm2 list`
* `pm2 stop my-app`
* `pm2 restart my-app`

##--##

# Forever

Monitors a Node.js application and restarts it if it crashes

* `npm install -g forever`
* `forever start server.js`
