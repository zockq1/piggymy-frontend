type ListType = {
  title: string;
  route: string;
  query: string;
};

export const contentList: ListType[] = [
  { title: '그리팅 메세지 관리', route: '/test', query: 'greetingMessage' },
  { title: '롤링 배너 관리', route: '/test', query: 'rollingBanner' },
  { title: '테마별 카드모음집 관리', route: '/test', query: 'themeCard' },
  { title: '배지 관리', route: '/test', query: 'badge' },
  { title: '링크 관리', route: '/test', query: 'linkSettings' },
];

export const vocaQuizList: ListType[] = [
  { title: '용어카드 관리', route: '/test', query: 'greetingMessage' },
  { title: '퀴즈카드 관리', route: '/test', query: 'greetingMessage' },
];

export const settingList: ListType[] = [
  { title: '전체 알림', route: '/test', query: 'greetingMessage' },
  { title: '신규 알림 등록', route: '/test', query: 'greetingMessage' },
  { title: '전체 공지 사항', route: '/test', query: 'greetingMessage' },
  { title: '신규 공지 사항 등록', route: '/test', query: 'greetingMessage' },
  { title: '전체 FAQ', route: '/test', query: 'greetingMessage' },
  { title: '신규 FAQ 등록', route: '/test', query: 'greetingMessage' },
  { title: '서비스 이용 약관', route: '/test', query: 'greetingMessage' },
  { title: '개인 정보 처리 방침', route: '/test', query: 'greetingMessage' },
];

export const userList: ListType[] = [
  { title: '기본 정보 관리', route: '/test', query: 'greetingMessage' },
];
export const managerList: ListType[] = [
  { title: '전체 게시판', route: '/test', query: 'greetingMessage' },
  { title: '신규 메모 등록', route: '/test', query: 'greetingMessage' },
];
