# React-portfolio

![screencapture-localhost-3000-2023-04-19-08_51_09](https://user-images.githubusercontent.com/95734153/232928982-1cce05c7-3cdb-4db2-b95d-f75d8ad5daeb.png)

```
React 17버전을 사용하여 만든 기업형 사이트 portfolio입니다.
- 정보 전달을 주제로 기업형 사이트를 구현했습니다. 보여주어야 할 정보가 명확한 사이트를 만들고자 직관적이고 명확한 레이아웃, 단순한 동선과 주요 정보를 강조할 수 있는 잡지를 디자인 컨셉으로 선정했습니다
- 사이트에 들어가는 description은 패션 잡지 vogue의 웹사이트에서 영감을 받아 제작되었습니다.

```

# Develop Environment

- node v14.17.5
- npm v6.14.14
- react v17

## Git Branch 별 용도
1. main branch -> 기본 redux 만으로 상태관리
2. redux-saga branch -> redux-saga 라이브러리를 사용하여 상태관리
3. redux-toolkit -> redux-toolkit 라이브러리를 사용하여 상태관리

---

# Use

- 터미널에서 npm install을 실행하여 의존성 모듈을 설치한다.
- npm run start로 프로젝트를 실행한다 (기본 포트는 3000)

---

# Project Directory

## Common component

+ js => (src > components > common)
+ style => (src > scss > common)
  + Header.js // 공통 헤더
  + Footer.js // 공통 푸터
  + Layout.js // 서브페이지 들의 공통 컴포넌트
  + Modal.js // 공통 modal
  + Menu.js // mobile sub menu
  + CookiePopUp.js // cookie popup
  + TopBtn.js // Top button


## Main page

+ js => (src > components > main)
+ style => (src > scss > main)
  + Main.js // main page
  + Btn.js // main.js 안의 컨텐츠 이동 버튼 컴포넌트
  + VisualMain.js // main page의 비쥬얼 영역
  + AboutMain.js // main page의 어바웃 영역
  + YouTubeMain.js // main page의 유투브영역
  + FlickrMain.js // main page의 flickr갤러리 영역
  + BaordMain.js // main page의 보드(자유게시판) 영역

## Sub page

+ js => (src > components > sub)
+ style => (src > scss > sub)
  + Organization.js // 어바웃 페이지의 organization page에 해당
  + Board.js // board 페이지
  + Contact.js // contact 페이지
  + Flickr.js // 갤러리페이지의 flickr page에 해당
  + Youtube.js // 갤러리페이지의 youtube page에 해당
  + Join.js // 회원가입 페이지
  + Map.js // 어바웃 페이지의 map page에 해당

! 모든 페이지의 스타일은 style.scss에 import

# Plugin
1. FontAwesome 사용하여 icon 구현
2. galleryMain.js에서 swiper.js plugin 사용 (v 9.0.5)
3. Flickr.js에서 isotope-layout plugin 사용 (v 1.0.7)
4. Contact.js에서 emailjs plugin 사용 (v 3.10.0)
5. Modal.js 에서 framer-motion plugin 사용 (v 6.5.1)

# Data
1. Gallery.js에서 Youtube open api 사용
2. Flickr.js에서 Flickr open api 사용
3. Map.js에서 KaKao developements map api 사용
4. Organization.js에서 public > DB > member.json 사용

