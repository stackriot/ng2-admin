FROM node:latest

ARG NODE=production

ENTRYPOINT /var/www


RUN curl --location --silent https://github.com/gliderlabs/herokuish/releases/download/v0.3.25/herokuish_0.3.25_linux_x86_64.tgz \
          | tar -xzC /bin

RUN npm install --global rimraf \
    && npm run clean \
    && npm install --global webpack webpack-dev-server typescript@beta \
    && npm install \
    && npm run build:prod

EXPOSE 80
