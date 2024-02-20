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
    libxtst6 \
    lsb-release

RUN npm install

# 애플리케이션 소스 추가
COPY . .

# React 앱 빌드
RUN npm run build --verbose

# 애플리케이션이 사용할 포트 설정
EXPOSE 3000

# 애플리케이션 실행
CMD ["npm", "start"]
