FROM node:16 as env

FROM env as build

COPY . src
WORKDIR src

RUN npm install

FROM build as test
RUN npm run test && \
    npm run coverage