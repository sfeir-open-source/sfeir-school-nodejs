# Sfeir Schools

## Step 12

On va déployer le truc... En local !

Docker FTW !

- On va créer un fichier `Dockerfile`. Voir la [référence](https://docs.docker.com/engine/reference/builder/).
- Avec une image `node:10` (voir le [docker hub](https://hub.docker.com/_/node/)).
- On build avec `docker build -t sfeir-schools .`.
- Un petit peu de [docker compose](https://docs.docker.com/compose/compose-file/) pour tout brancher facilement.

Il faut modifier le code:

- Pour passer le bon host.
- Mettre un système de retry pour attendre que la DB soit bien démarrée !
- Attention au `process.exit(1)` qui peut faire des blagues (expérience vécue ^^).