# Base image
FROM node:14.16-buster

# Make folder to put our files in
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/crono

# Set working directory so that all
# subsequent command runs in this folder
WORKDIR /usr/src/app/crono


# Copy our app
COPY public /usr/src/app/crono/public
COPY src /usr/src/app/crono/src
COPY package.json /usr/src/app/crono/package.json
RUN npm install

# Expose port to access server
EXPOSE 3000

# Command to run our app
CMD [ "npm", "start" ]