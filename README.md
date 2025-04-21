# HANTEO Global 프론트엔드 과제

예시를 참고해 페이지 구현했습니다.

## 개발 환경

- React ^19.0.0
- typescript
- node v20.11.1

## 동작 방식

해당 페이지는 헤더, 메인(배너 및 콘텐츠 리스트), 풋터로 구성된 고정형 레이아웃입니다.
반응형으로 제작되진 않았으며, 전달받은 425x900 사이즈 기준으로 작업되었습니다.
슬라이드 요소가 많은 UI 특성상, Swiper 라이브러리를 사용하여 빠르고 직관적인 슬라이드 구현이 가능했습니다.
또한, Tailwind CSS를 활용해 전체 UI를 빠르고 간편하게 구축할 수 있었습니다.

### 라우팅 방식

Swiper의 history 모드 대신 React Router를 선택하여 라우팅을 구현한 이유

- URL 기반 라우팅이 명확하게 동작하여, 페이지를 공유하거나 직접 접근하는 경우에도 정확한 위치로 이동할 수 있습니다.
- 뒤로 가기/앞으로 가기 같은 브라우저 기본 탐색 기능이 자연스럽게 작동합니다.
- 중첩 라우팅, lazy loading, 쿼리 파라미터, 리디렉션, 404 처리 등 다양한 라우팅 기능 구현이 용이해 이후 확장에 유리합니다.
- SEO와 접근성 측면에서도 React Router가 더 유리하다고 판단했습니다.
- Swiper와 React Router를 연동하여, URL 변경에 따라 슬라이드 위치가 자동으로 매핑되고 상태도 일관성 있게 관리됩니다.

### 기능 구성

- 헤더의 내비게이션 메뉴와 메인 콘텐츠 리스트는 라우팅되어 있어, 메뉴 클릭 시 각 카테고리(페이지)로 이동합니다.
  - 내비게이션 바는 화면 너비를 초과할 경우 터치 슬라이드로 나머지 메뉴를 탐색할 수 있습니다.
  - 콘텐츠 리스트는 좌우 슬라이드를 통해 카테고리 간 이동이 가능합니다.
- 콘텐츠는 무한 스크롤(Infinite Scroll) 방식으로 로드되며, 더 이상 불러올 데이터가 없으면 하단 풋터가 나타납니다.
- 메인 배너 영역은 총 5개의 더미 데이터를 사용해 루프 슬라이드로 구성되어 있으며, 각 배너 클릭 시 외부 링크로 이동합니다.

## 폴더 구조

```bash
project
├── 📁 .vscode
├── 📁 src
│   ├── 📁 components
│   │   ├── 📄 Banner.tsx
│   │   ├── 📄 Content.tsx
│   │   ├── 📄 ExternalLink.tsx
│   │   ├── 📄 InfiniteScroll.tsx
│   │   ├── 📄 NavList.tsx
│   │   ├── 📄 PageLayout.tsx
│   │   └── 📄 TopBannerSlider.tsx
│   ├── 📁 config
│   │   └── 📄 routeConfig.ts
│   ├── 📁 data
│   │   └── 📄 bannerDummyData.json
│   ├── 📁 hooks
│   │   └── 📄 useIntersectObserver.ts
│   ├── 📁 layout
│   │   ├── 📄 Footer.tsx
│   │   ├── 📄 Header.tsx
│   │   ├── 📄 index.tsx
│   │   └── 📄 Main.tsx
│   ├── 📁 pages
│   │   ├── 📄 ChargingStation.tsx
│   │   ├── 📄 Chart.tsx
│   │   ├── 📄 Events.tsx
│   │   ├── 📄 News.tsx
│   │   ├── 📄 Store.tsx
│   │   └── 📄 Whook.tsx
│   ├── 📁 types
│   │   └── 📄 index.ts
│   ├── 📄 App.tsx
│   ├── 📄 index.css
│   ├── 📄 main.tsx
│   └── 📄 routes.tsx
└── 📁 public
```

### 📁 components

프로젝트 전반에서 사용되는 컴포넌트들이 저장된 디렉토리입니다.

### 📁 config

헤더의 내비게이션 메뉴와 메인 콘텐츠 리스트에 사용될 routeConfig파일이 있습니다.

### 📁 data

배너에 사용될 더미데이터가 있습니다.

### 📁 hooks

재사용 가능한 커스텀 훅(custom hooks)들을 모아놓은 디렉토리로 무한 스크롤 등에서 사용하는 Intersection Observer를 제어하는 커스텀 훅이 포함되어 있습니다.

### 📁 layout

페이지의 전체적인 레이아웃을 구성하는 컴포넌트들(Header, Footer, Main 등)이 포함된 디렉토리입니다.

### 📁 pages

컨텐츠 리스트가 보이는 부분으로 각각의 카테고리를 담아놓은 디렉토리입니다.

### 📁 types

전역적으로 재사용되는 TypeScript 타입들을 모아놓은 디렉토리입니다.

### 📄 routes.tsx

헤더의 내비게이션 메뉴와 메인 콘텐츠 리스트의 경로를 정의하고, 각 페이지를 라우팅하는 역할을 합니다.

## 프로젝트 설치 및 실행 방법

1. 해당 프로젝트(레포지토리)를 로컬환경에 클론합니다.

```bash
git clone https://github.com/Seulji-jo/hanteo_assignment.git
```

2. 프로젝트를 실행시키기 위해 package를 인스톨합니다.

```bash
npm install
```

3. 다음 명령어로 개발 서버를 실행할 수 있습니다.

```bash
npm run dev
```

4. 브라우저에서 `http://localhost:5173/`로 들어갑니다.<br>

```bash
http://localhost:5173/
```
