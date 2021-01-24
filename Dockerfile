# Filename: Dockerfile
FROM node:15-alpine3.10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN cd shorturlui && npm install && cd ..
EXPOSE 9000
CMD ["npm","run", "dev"]