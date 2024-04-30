type ListType = {
  title: string;
  route: string;
};

export const contentList: string[] = [
  '그리팅 메세지 관리',
  '롤링 배너 관리',
  '테마별 카드모음집 관리',
  '배지 관리',
  '링크 관리',
];

export const vocaQuizList: string[] = ['용어카드 관리', '퀴즈카드 관리'];

export const settingList: ListType[] = [
  { title: '전체 알림', route: '/test' },
  { title: '신규 알림 등록', route: '/test' },
  { title: '전체 공지 사항', route: '/test' },
  { title: '신규 공지 사항 등록', route: '/test' },
  { title: '전체 FAQ', route: '/test' },
  { title: '신규 FAQ 등록', route: '/test' },
  { title: '서비스 이용 약관', route: '/test' },
  { title: '개인 정보 처리 방침', route: '/test' },
];

export const userList: string[] = [];
export const managerList: string[] = [];
