# Sfeir Schools

## Step 9

Et comment on sait ce qu'il se passe ? On met des logs !

- On va ajouter le module [bunyan](https://www.npmjs.com/package/bunyan#adding-a-stream).
- On ajoute le logger pour sortir dans la console et dans un fichier avec un stream `rotating-file`.
- On va modifier le niveau de log via la variable d'environnement `LOG_LEVEL`.
- Et on met des logs partout !
- On va utiliser aussi les évènements [`uncaughtException`](https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_event_uncaughtexception) et [`unhandledRejection`](https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_event_unhandledrejection)...
- On va créer un script npm `dev` avec la valeur `node index.js | bunyan` pour avoir un affichage joli dans la console.
