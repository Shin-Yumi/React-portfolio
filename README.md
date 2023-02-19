# React-portfolio

# Develop Environment

- node v14.17.5
- npm v6.14.14
- react v17

---

# Use

- 터미널에서 npm install을 실행하여 의존성 모듈을 설치한다.
- npm run start로 프로젝트를 실행한다 (기본 포트는 3000)

---

# Project Directory

## Common component

(src > components > common)
style => (src > scss > common)
Header.js // 공통 헤더
Footer.js // 공통 푸터
Layout.js // 서브페이지 들의 공통 컴포넌트
Modal.js // 공통 modal

## Main page

js => (src > components > main)
style => (src > scss > main)
Main.js // main page
Contents.js // main.js 안의 컨텐츠들의 공통 레이아웃
Btn.js // main.js 안의 컨텐츠 이동 버튼 컴포넌트
VisualMain.js // main page의 비쥬얼 영역
AboutMain.js // main page의 어바웃 영역
GalleryMain.js // main page의 갤러리 영역
BaordMain.js // main page의 보드(자유게시판) 영역

## Sub page

(src > components > sub)
style => (src > scss > sub)
About.js // 어바웃 페이지의 organization page에 해당
Board.js // board 페이지
Contact.js // contact 페이지
Flickr.js // 갤러리페이지의 flickr page에 해당
Gallery.js // 갤러리페이지의 youtube page에 해당
Join.js // 회원가입 페이지
Map.js // 어바웃 페이지의 map page에 해당

---

- 모든 페이지의 스타일은 style.scss에 import
