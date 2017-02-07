FROM node:latest

ARG NODE=production

RUN git clone https://github.com/sethbergman/ng2-admin.git /var/www \
    && cd /var/www \
    && npm install --global rimraf \
    && npm run clean \
    && npm install --global webpack webpack-dev-server typescript@beta \
    && npm install \
    && npm run build:prod

EXPOSE 5000

ENTRYPOINT /var/www
