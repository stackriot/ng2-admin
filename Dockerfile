FROM nginx:latest
COPY dist/ /usr/share/nginx/html


ARG NODE=production
