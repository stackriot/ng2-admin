FROM node:latest

ARG NODE=production
ENV NODE_ENV ${NODE}


EXPOSE 8080

ENTRYPOINT /var/www
RUN npm run build
