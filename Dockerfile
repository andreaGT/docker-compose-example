FROM node

RUN mkdir data
COPY ./nodeweb data/
EXPOSE 3000
CMD node data/nodeweb/hello.js
