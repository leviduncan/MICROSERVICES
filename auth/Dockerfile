FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT 8002

EXPOSE 8002

CMD [ "npm", "start" ]