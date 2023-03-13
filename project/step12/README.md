# Sfeir Schools

## Step 12

On va déployer le truc... En local !

Docker FTW !

- On va créer un fichier `Dockerfile`. Voir la [référence](https://docs.docker.com/engine/reference/builder/).
- Avec une image `node:14` (voir le [docker hub](https://hub.docker.com/_/node/)).
- On build avec `docker build -t sfeir-schools .`.
- On run avec `docker run -p 3000:3000 sfeir-schools`
