FROM node:14.16-buster

# Make folder to put files in
RUN mkdir -p /usr/src/app
RUN mkdir -p /ur/src/app/backCrono

#Set working directory 
WORKDIR /usr/src/app/backCrono

#COPY package json and install dependencies
COPY package*.json ./
RUN npm install

#Copy app
COPY FROM https://github.com/eduardo732/timerFullStack

# Expose port to access server
EXPOSE 4000

# Command to run our app
CMD [ "npm", "start"]