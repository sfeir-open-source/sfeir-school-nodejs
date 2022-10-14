<!-- .slide: class="with-code" -->
# Containerization

* Build a Docker image with a file`Dockerfile`

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
