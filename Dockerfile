FROM node:latest

ARG NODE=production
ENV NODE_ENV ${NODE}
RUN npm start

ARG PATH_PREFIX                            # declare PATH_PREFIX as build arg
RUN PATH_PREFIX=${PATH_PREFIX}   # use PATH_PREFIX (in this case as an env var consumed by build script)

EXPOSE 8080

# ENTRYPOINT ["npm", "run", "server:prod"]
