FROM node:alpine

RUN mkdir data
COPY ./nodeweb data/
