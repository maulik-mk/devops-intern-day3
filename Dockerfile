FROM node:slim

WORKDIR /app

COPY package*.json .
COPY package-lock.json .


COPY . ./

RUN npm install

CMD ["node", "src/app.js"]