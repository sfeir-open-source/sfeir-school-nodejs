# Sfeir Schools

## Step 9

Et comment on sait ce qu'il se passe ? On met des logs !

- On va ajouter le module [wintson](https://www.npmjs.com/package/winston).
- On ajoute le logger pour sortir dans la console et dans des fichiers *.log.
- On va modifier le niveau de log via la variable d'environnement `LOG_LEVEL`.
- Et on met des logs partout !
- On va utiliser aussi les évènements [`uncaughtException`](https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_event_uncaughtexception) et [`unhandledRejection`](https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_event_unhandledrejection)...
