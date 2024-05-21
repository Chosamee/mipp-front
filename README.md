### Music Plagiarism Checker Front-end

https://aimipp.com



# MIPPIA-Front docs

## 기본 configure

npm 을 이용해서 패키지 관리를 하고 있습니다.

CRA를 통해 생성된 리액트 프로젝트 입니다.

# Root 폴더

## 1. .env (Environment variables)

```
REACT_APP_MIPP_API_URL={백엔드 URL}
REACT_APP_PORTONE_CHANNEL_KEY={포트원 채널 키}
REACT_APP_PORTONE_STORE_ID={포트원 스토어 ID}

// 로컬 https 환경 필요시 
HTTPS=true
HTTPS_CRT_FILE={공개키 (인증서) eg)./localhost.pem}
HTTPS_KEY_FILE={비밀키 eg)./localhost-key.pem}

```

https 환경 세팅

`mkcert`를 사용하여 로컬 CA(인증 기관)를 생성하고, `localhost`에 대한 인증서를 생성합니다.

이는 `localhost.pem` (인증서 파일)과 `localhost-key.pem` (개인 키 파일)을 생성합니다.

```bash
mkcert -install
mkcert localhost
```

## 2. .npmrc

npm 동작 구성 설정 파일입니다.

```
legacy-peer-deps=true
```

이 옵션은 npm v7 이상에서 중요한 역할을 합니다. 이 옵션을 사용하면 npm이 의존성 설치 시 더 느슨한 방식으로 처리하도록 지시합니다.

1. **동일한 의존성 해결**: npm v7부터는 패키지의 **`peerDependencies`**가 엄격하게 처리됩니다. 즉, **`peerDependencies`**에 명시된 패키지가 설치되어 있지 않으면 설치 오류가 발생합니다. **`legacy-peer-deps`** 옵션을 사용하면, 이러한 엄격한 처리 대신 이전 버전의 npm처럼 **`peerDependencies`**를 무시하거나, 가능한 가장 적합한 버전을 설치하도록 합니다.
2. **의존성 충돌 방지**: **`peerDependencies`**의 버전 충돌로 인해 발생하는 문제를 피할 수 있습니다. 이는 특히 오래된 프로젝트나 많은 의존성을 가진 프로젝트에서 유용합니다. 이 옵션을 사용하면 충돌 문제를 무시하고 설치를 진행할 수 있습니다.
3. **하위 호환성 유지**: 이전 버전의 npm을 사용하는 프로젝트와의 호환성을 유지할 수 있습니다. 이는 프로젝트가 npm v7로 업그레이드되었을 때 발생할 수 있는 의존성 문제를 해결하는 데 도움을 줍니다.

react-snap을 쓰는 과정에서 puppeteer가 말썽을 일으켜 구버전을 이용하고, 더 이상 업데이트 되지 않기 때문에 의존성 관리를 위해 옵션을 달아줬습니다.

## 3. cloudbuild.yml

```yaml
name: Build and Deploy to GCP

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up GCP Cloud SDK
        uses: google-github-actions/setup-gcloud@v0.2.0
        with:
          service_account_key: ${{ secrets.GCP_SA_KEY }}
          project_id: ${{ secrets.GCP_PROJECT_ID }}

      - name: Build and push Docker image
        run: |
          docker build -t gcr.io/$GCP_PROJECT_ID/my-app:$GITHUB_SHA --build-arg REACT_APP_MIPP_API_URL=${{ secrets.REACT_APP_MIPP_API_URL }} --build-arg REACT_APP_GOOGLE_CLIENT_ID=${{ secrets.REACT_APP_GOOGLE_CLIENT_ID }} .
          gcloud auth configure-docker
          docker push gcr.io/$GCP_PROJECT_ID/my-app:$GITHUB_SHA

          - name: Deploy to Google Compute Engine
      run: |
        # 이미지 이름 설정
        IMAGE=gcr.io/$GCP_PROJECT_ID/my-app:$GITHUB_SHA

        # 인스턴스가 이미 존재하는지 확인
        if gcloud compute instances describe my-instance --zone asia-northeast3-c 2>/dev/null; then
          # 인스턴스 업데이트
          gcloud compute instances update-container my-instance --container-image $IMAGE --zone asia-northeast3-c
          # 새 인스턴스 생성
          gcloud compute instances create-with-container my-instance --container-image $IMAGE --zone asia-northeast3-c
        fi

```

GCP Cloudbuild를 이용해 자동화 배포를 할 수 있는 코드였습니다. (오래됨)

현재는 github action과 docker hub를 이용하고 있으며, cloudbuild의 비용 문제로 인해 사용하지 않습니다.

## 4. Dockerfile

프론트엔드 프로젝트를 도커 이미지로 만드는 코드입니다.

주석이 메인 설명이고, 

1단계: 기본적으로 react-snap을 사용하기 위해 puppeteer 의존성 설치 및 해당 권한을 얻어 의존성을 설치 합니다.

2단계: 정적 페이지를 serving 해줘야 하기 때문에 nginx를 같이 달아줍니다. PRERENDER_TOKEN의 경우 저희가 설정한 크롤러가 아닌 경우에는 prerender.io를 통해 정적페이지를 serving 받습니다. 여기서 토큰을 nginx.conf에도 추가해줘야 하기 때문에 docker-entrypoint.sh 파일을 이용할 것입니다.

## 5. docker-entrypoint.sh

nginx.conf.template 파일에 ${PRERENDER_TOKEN} 부분에 값을 넣어준 위 nginx.conf로 복사해서 도커 이미지에 넣어주기 위한 파일입니다.

## 6. nginx.conf.template

정적 파일에 대한 캐싱 정책을 설정 가능합니다. 이 경우, 매번 정적 파일을 서버에서 받아오는 것이 아닌 브라우저의 캐시에 저장됩니다. 특히 `add_header Cache-Control "public";` 의 경우, CDN에서도 캐시가 적용되어 성능이 향상됩니다.

$http_user_agent를 통해 요청자가 웹 크롤러인지 판단하고, 만약 그렇다면 $prerender value를 1로 설정해줍니다. 이 경우 ssg로 생성된 정적 페이지를 serving합니다. 해당 파일을 찾을 수 없다면 index page를 반환합니다.

일반적인 유저라면 동적 js와 spa를 제공합니다.

주소 일관성을 유지하기 위해 주소 끝에 “/”가 없는 경우 “/”를 붙여 리디렉션 시킵니다.

serving하는 page url은 site map에 설정해둡니다.

## 7. .github/*

1. deploy.yml

각 github secrets 값으로 docker 이미지를 빌드해서 docker hub에 업로드 합니다. master branch에서 작동합니다. 이슈를 대비해 `:v${{ github.run_number }}` 를 붙여 버전 관리를 합니다.

1. to_instance.yml

인스턴스에 docker hub에서 이미지를 불러온 뒤 현재 실행 중인 컨테이너를 종료 및 삭제한 뒤에 컨테이너를 실행시킵니다. deploy branch에서 작동합니다.

## 8. vercel.json

테스트용 인스턴스를 만들기 전에 vercel에서 테스트를 했습니다. vercel 배포 시에, CORS 설정을 하기 위한 정보가 들어가 있습니다.

# Public 폴더

## 1. favicon 파일들

[https://realfavicongenerator.net/](https://realfavicongenerator.net/) 를 이용했습니다. 대부분의 브라우저 및 기기에 해당하는 파비콘을 넣어둡니다.

## 2. manifest.json

웹 앱 설정입니다. (PWA)

## 3. index.html

SEO를 위해선 웹 분석을 필요로 하므로 Tag Manager를 달아줍니다. 태그 매니저 코드의 위치가 권장되는 부분이 있으므로, 공식 문서를 확인해봅니다.

<link> 에서 파비콘을 설정할 때, `?v=2` 이런 방식을 통해 캐싱된 파비콘을 덮어 씌울 수 있습니다. 검색 엔진에 노출될 때, 파비콘이 수정되지 않는 오류를 해결했습니다.

# src 폴더

zustand와 react-query로 상태 관리를 하고 있습니다.

디자인에서 최소 너비는 375px를 잡고, 외에는 tailwind.css에서 제공하는 규격을 이용했습니다.
