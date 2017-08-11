FROM node:8

COPY . /app

WORKDIR /app

RUN npm install

RUN npm run build

EXPOSE 3000

CMD node /app/dist/app.js
