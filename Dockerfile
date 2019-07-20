FROM node:alpine

RUN mkdir -p /app

WORKDIR /app

ADD ./ /app

RUN yarn 

CMD yarn start