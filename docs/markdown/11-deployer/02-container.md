# Containerization

* Install docker-desktop
* Windows installation [link](https://docs.docker.com/desktop/install/windows-install/)
* Mac installation [link](https://docs.docker.com/desktop/install/mac-install/)

##--##

<!-- .slide: class="with-code" -->
# Containerization

* Build a Docker image with a file `Dockerfile`

```
# use an image node 14 latest version
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

Notes:
explain the file Dockerfile

##--##

# Containerization

* Create a `.dockerignore` file to exclude the node_modules directory

* Build the image

```bash
docker build . -t <your username>/node-web-app
```

* Run the image

```bash
docker run -p 49160:8080 -d <your username>/node-web-app
```
