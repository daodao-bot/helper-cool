FROM nginx:lastest
COPY ./dist /usr/share/nginx/html
VOLUME /tmp
EXPOSE 80