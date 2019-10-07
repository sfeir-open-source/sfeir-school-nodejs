# Sfeir Schools

## Step 10

Des middlewares !

- On va ajouter un middleware d'erreur pour remplacer les `res.sendStatus(...)` qui envoient des 4xx ou 5xx.
- On va ajouter un middleware pour mesurer le temps de traitement des requêtes pour les envoyer dans les logs.
  - On installe le module [on-headers](https://www.npmjs.com/package/on-headers).
  - Et on joue avec [process.hrtime()](https://nodejs.org/api/process.html#process_process_hrtime_time).
