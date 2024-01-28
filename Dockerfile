FROM nginx:latest
COPY ./output/public /usr/share/nginx/html
VOLUME /tmp
EXPOSE 80