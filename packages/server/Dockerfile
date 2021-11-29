FROM node:16.13-slim

WORKDIR /app

COPY package*.json .

RUN npm ci 

COPY . . 

EXPOSE 4000

CMD npm run dev
