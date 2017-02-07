FROM node:latest

ARG NODE=production

ENTRYPOINT /var/www

npm install --global rimraf \
    && npm run clean \
    && npm install --global webpack webpack-dev-server typescript@beta \
    && npm install \
    && npm run build:prod

EXPOSE 80

# RUN npm run build
