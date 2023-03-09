FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm ci --only=production

COPY . .

ENV NODE_ENV production
ENV LOG_LEVEL info

EXPOSE 3000
CMD ["npm", "start"]
