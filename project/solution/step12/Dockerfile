FROM node:10

RUN mkdir /src
WORKDIR /src

COPY package.json package-lock.json /src/
RUN mkdir lib/ \
    && npm install --silent --production

COPY index.js /src/
COPY lib /src/lib/

ENV NODE_ENV development

EXPOSE 3000

CMD ["npm", "start"]
