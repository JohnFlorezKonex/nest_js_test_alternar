FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
# RUN npm run build

EXPOSE 8894

# Start the server using the production build
# CMD [ "node", "dist/main.js" ]
CMD [ "npm", "run", "start" ]
