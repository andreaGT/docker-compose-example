FROM nginx

RUN apt-get -y update \
	&& apt-get -y install curl

COPY nginx.conf /etc/nginx/
