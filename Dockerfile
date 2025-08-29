FROM node:24-alpine

WORKDIR /app

COPY package.json .
RUN npm install
RUN npm i serve -g

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["npx", "serve", "dist", "-p", "3001"]
