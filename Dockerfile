FROM nginx:latest
COPY dist/ /usr/share/nginx/html

# FROM sethbergman/ng2-admin:latest
ARG NODE=production
