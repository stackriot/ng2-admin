FROM sethbergman/ng2-admin:latest

ARG NODE=production

#RUN git clone https://github.com/sethbergman/ng2-admin.git /var/www \
#    && cd /var/www \
RUN npm run prebuild:prod && npm run build:prod && npm run server:prod

EXPOSE 80

ENTRYPOINT /var/www
# RUN npm run build
