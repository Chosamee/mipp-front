# Node.js 이미지를 기반으로 설정
FROM node:20

# 애플리케이션 디렉토리 생성
WORKDIR /usr/src/app

# 빌드 환경 변수 설정
ARG REACT_APP_MIPP_API_URL
ARG REACT_APP_GOOGLE_CLIENT_ID
ENV REACT_APP_MIPP_API_URL=${REACT_APP_MIPP_API_URL}
ENV REACT_APP_GOOGLE_CLIENT_ID=${REACT_APP_GOOGLE_CLIENT_ID}

# 애플리케이션 의존성 설치
COPY package*.json ./

# Puppeteer 의존성 설치
RUN apt-get update && apt-get install -y \
    wget \
    ca-certificates \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libgdk-pixbuf2.0-0 \
    libnspr4 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    libgbm1 \
    libxshmfence1 \
    libgconf-2-4 \
    libx11-6 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrender1 \
    libcairo2 \
    libcups2 \
    libdbus-1-3 \
    libexpat1 \
    libfontconfig1 \
    libgcc1 \
    libgdk-pixbuf2.0-0 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libstdc++6 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrandr2 \
    libxrender1 \
    libxss1 \
    libxkbfile1 \
    libxtst6 \
    lsb-release

# Puppeteer 사용자와 그룹 생성
RUN groupadd -r puppeteer && useradd -r -g puppeteer -G audio,video puppeteer \
    && mkdir -p /home/puppeteer/Downloads \
    && chown -R puppeteer:puppeteer /home/puppeteer \
    && chown -R puppeteer:puppeteer /usr/src/app

# Puppeteer 사용자로 전환
USER puppeteer

# npm 의존성 설치
RUN npm install

# 애플리케이션 소스 추가
COPY . .

# 2단계: Nginx를 사용하여 빌드된 애플리케이션 서빙
FROM nginx:alpine AS production-stage

# Nginx 설정 파일 복사
COPY nginx.conf /etc/nginx/nginx.conf

# 빌드 단계에서 생성된 정적 파일을 Nginx 컨테이너로 복사
COPY --from=build-stage /app/build /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
