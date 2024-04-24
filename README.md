npm i

//프로젝트 실행<br>
npm run dev

//모킹 서버 실행<br>
npm run mock

//스토리북 실행<br>
npm run storybook

[UI 문서](docs/ui.md)

디렉토리

```
┌─ src
│ ├─ app
│ │ ├─ layout
│ │ ├─ page # 페이지별 세부 컴포넌트
│ │ └─ _component # 해당 페이지에서 사용하는 컴포넌트
│ ├─ share
│ │ ├─ hooks # 커스텀 훅
│ │ ├─ layout # 전체 레이아웃 구조, 헤더 등
│ │ ├─ query # ajax 비동기 작업
│ │ └─ ui # 버튼, 모달 등 공통 ui
│ ├─ mocks # 목업 데이터 파일
│ ├─ type # 전역 타입 정의
└─ public # 이미지등 정적 파일
```
