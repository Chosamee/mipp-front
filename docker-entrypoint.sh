#!/bin/sh
# envsubst를 사용하여 nginx.conf 생성
envsubst '${PRERENDER_TOKEN}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

# Nginx 시작
exec nginx -g 'daemon off;'