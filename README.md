npm i

//프로젝트 실행<br>
npm run dev

//모킹 서버 실행<br>
npm run mock

//스토리북 실행<br>
npm run storybook

[UI 문서](docs/ui.md)

디렉토리

효율적인 관리를 위해 디렉토리 구조를 다음과 같이 정의합니다.

```
┌─ src
│ ├─ app
│ │ ├─ layout # 기본 레이아웃
│ │ ├─ page # 페이지별 세부 컴포넌트
│ │ └─ shared # 공통 컴포넌트
│ ├─ shared
│ │ ├─ auth # 인증 관련 코드
│ │ └─ hooks # react hooks
│ ├─ mocks # 페이지
│ ├─ styles # 기본 스타일
│ └─ types # 타입 정의
└─ public # 이미지등 정적 파일
```
