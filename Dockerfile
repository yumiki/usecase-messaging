FROM node:14.15.4
 
WORKDIR /usr/src/app
 
COPY package*.json ./
 
RUN npm install -f
 
COPY . .
 
EXPOSE 3000
 
CMD [ "npm", "start" ]