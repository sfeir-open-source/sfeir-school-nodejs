<!-- .slide: class="with-code" -->
# Conteneurisation

* Contruire une image Docker avec un fichier `Dockerfile`

```
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]
```

##--##

# Conteneurisation

* Créer un fichier `.dockerignore` pour exclure le répertoire node_modules

* Construire l'image

```bash
docker build . -t <your username>/node-web-app
```

* Démarrer l'image

```bash
docker run -p 49160:8080 -d <your username>/node-web-app
```