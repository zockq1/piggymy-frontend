import Breadcrumb from '@/share/ui/breadcrumb/Breadcrumb';

export default async function RollingBanner() {
  return (
    <>
      <div className="flex h-[100px] pl-8">
        <Breadcrumb path={['콘텐츠', '테마별 카드 모음집 관리']} />
      </div>
      <div className="h-[200px] bg-secondary">테마 카드 선택</div>
      <div className="h-[500px] bg-primary">테마 카드 관리 폼</div>
    </>
  );
}
