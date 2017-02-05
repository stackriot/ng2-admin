FROM node:latest

ARG NODE=production


EXPOSE 8080

ENTRYPOINT /var/www
RUN npm run build
