import Breadcrumb from '@/share/ui/breadcrumb/Breadcrumb';

export default async function GreetingMessage() {
  return (
    <>
      <div className="flex h-[100px] pl-8">
        <Breadcrumb path={['콘텐츠', '그리팅 메시지 관리']} />
      </div>
      <div className="h-[400px] bg-secondary">그리팅 메시지 관리 폼</div>
    </>
  );
}
