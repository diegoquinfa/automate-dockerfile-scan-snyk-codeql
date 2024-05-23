FROM node:20-alpine3.19 as dev-deps
EXPOSE 3000
WORKDIR /app
COPY . .
RUN npm install
CMD [ "node", "src/server.js" ]
