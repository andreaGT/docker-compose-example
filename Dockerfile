FROM node:alpine

RUN apt-get -y update 
RUN mkdir data
COPY ./nodeweb data/
CMD node data/nodeweb/hello.js
