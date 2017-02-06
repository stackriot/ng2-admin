FROM node:latest

ARG NODE=production

export DOCKER_HOST="http://172.17.0.1:8080"

RUN git clone https://github.com/sethbergman/ng2-admin.git /var/www \
    && cd /var/www \
    && npm install --global rimraf \
    && npm run clean \
    && npm install --global webpack webpack-dev-server typescript@beta \
    && npm install \
    && npm run build:prod

EXPOSE 8080

ENTRYPOINT /var/www
# RUN npm run build
