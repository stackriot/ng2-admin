FROM node:latest

ARG NODE=production
ENV NODE_ENV ${NODE}
RUN npm run build


EXPOSE 8080

WORKDIR /var/www
