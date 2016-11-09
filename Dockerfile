FROM mhart/alpine-node:6.9.1
MAINTAINER John Smith <johnsmith1st@live.com>
WORKDIR /src
ADD . .
RUN npm install
EXPOSE 3000
CMD npm start