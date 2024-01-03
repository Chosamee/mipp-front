# 빌드 단계
# Node.js 이미지를 사용하여 의존성 설치 및 애플리케이션 빌드
FROM node:14 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# 실행 단계
# Nginx 이미지를 사용하여 정적 파일 서빙
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# Nginx 설정 파일을 필요한 경우 복사할 수 있습니다.
# COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]