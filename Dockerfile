FROM sethbergman/ng2-admin:latest
ARG NODE=production

RUN curl --location --silent https://github.com/gliderlabs/herokuish/releases/download/v0.3.25/herokuish_0.3.25_linux_x86_64.tgz \
          | tar -xzC /bin

RUN npm run build:prod

ENTRYPOINT /var/www

EXPOSE 80
