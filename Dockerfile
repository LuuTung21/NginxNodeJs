FROM node:20

# Create app directory
WORKDIR /app

# Install app dependencies
COPY server.js .
COPY package*.json .
COPY index.html .

RUN npm install

EXPOSE 3000

CMD [ "node", "server.js" ]