FROM node:10

WORKDIR /usr/src/app

COPY package*.json./

RUN npm start

COPY .. 

EXPOSE 8080

CMD ["node", "index.js"]