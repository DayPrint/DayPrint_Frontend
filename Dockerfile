# base image
FROM node:16 as build

# Conventional working directory
RUN mkdir /usr/src/app

# set working directory
WORKDIR /usr/src/app

# exposing all our Node.js binaries
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Copy package.json
COPY package.json /usr/src/app/package.json

#COPY package.json /app/package.json
RUN npm install --silent && npm install react-scripts@5.0.1 -g --silent

# add app
COPY . /usr/src/app

# start and/or build app
RUN npm run build

FROM nginx:1.20.1

# Remove default nginx static resources
RUN rm /etc/nginx/conf.d/default.conf

#copies React to the container directory
COPY nginx/nginx.conf /etc/nginx/conf.d

# Set working directory to nginx resources directory
COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 80
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]