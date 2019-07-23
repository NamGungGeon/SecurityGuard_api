FROM node:alpine

RUN mkdir -p /app

WORKDIR /app

ADD ./ /app

RUN yarn 

EXPOSE 80

CMD yarn deploy