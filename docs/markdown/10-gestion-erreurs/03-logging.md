# Logging

* On log avec `console.log` sur la sortie standard (stdout)
* On log avec `console.error` sur la sortie erreur (stderr)

Astuce pour afficher un objet dans la console :

```javascript
console.log(JSON.stringify(obj, null, 2))
```

##--##

# Logging

Quelques librairies pour la gestion des logs

* Winston : le plus populaire
* Log4js : similaire à log4j pour Java
* Pino : rapidité
* Bunyan : sortie JSON
* Morgan : middleware HTTP Request
* Roar : compatible Node.js et navigateur

https://www.npmtrends.com/log4js-vs-morgan-vs-pino-vs-winston-vs-bunyan
