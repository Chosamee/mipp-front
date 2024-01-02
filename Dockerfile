# Node.js 베이스 이미지 사용
FROM node:14

# /app 디렉토리를 작업 디렉토리로 설정
WORKDIR /app

# package.json과 package-lock.json 파일을 /app 디렉토리에 복사
COPY package*.json ./

# npm을 사용하여 의존성 설치
RUN npm install

# 현재 디렉토리의 모든 파일을 /app 디렉토리에 복사
COPY . .

# 3000 포트를 열기
EXPOSE 3000

# 컨테이너가 시작될 때 실행할 명령어
CMD ["node", "app.js"]