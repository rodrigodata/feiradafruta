FROM node:alpine

COPY . /app

WORKDIR /app

RUN npm install --production

EXPOSE 3000

CMD npm start