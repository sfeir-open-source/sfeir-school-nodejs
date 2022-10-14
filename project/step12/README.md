# Sfeir Schools

## Step 12

We're going to deploy the thing... Locally!

Docker For The Win!

- We will create a file `Dockerfile`. See [reference](https://docs.docker.com/engine/reference/builder/).
- With a `node:14` image (see the [docker hub](https://hub.docker.com/_/node/)).
- We build with `docker build -t sfeir-schools .`.
- On run with `docker run -p 3000:3000 sfeir-schools`
