# Node.js 이미지를 기반으로 설정
FROM node:14

# 애플리케이션 디렉토리 생성
WORKDIR /usr/src/app

# 빌드 환경 변수 설정
ARG REACT_APP_MIPP_API_URL
ARG REACT_APP_GOOGLE_CLIENT_ID
ENV REACT_APP_MIPP_API_URL=${REACT_APP_MIPP_API_URL}
ENV REACT_APP_GOOGLE_CLIENT_ID=${REACT_APP_GOOGLE_CLIENT_ID}

# 애플리케이션 의존성 설치
COPY package*.json ./
RUN npm install

# 애플리케이션 소스 추가
COPY . .

# React 앱 빌드
RUN npm run build

# 애플리케이션이 사용할 포트 설정
EXPOSE 80

# 애플리케이션 실행
CMD ["npm", "start"]
