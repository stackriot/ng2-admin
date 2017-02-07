FROM node:latest

ARG NODE=production

ENTRYPOINT /var/www


EXPOSE 80

# RUN npm run build
