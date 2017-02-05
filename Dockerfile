FROM node:latest

ARG NODE=production

RUN git clone https://github.com/sethbergman/ng2-admin.git /var/www \
    && cd /var/www \
    && npm run build:prod

EXPOSE 8080

ENTRYPOINT /var/www
# RUN npm run build
