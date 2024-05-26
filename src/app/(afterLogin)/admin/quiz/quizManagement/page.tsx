import Layout from '@/share/layout/Layout';

export default async function QuizManagement() {
  return (
    <>
      <Layout.Content.Full>
        <div className=" h-[50px] bg-primary">라우팅 타이틀</div>
      </Layout.Content.Full>
      <Layout.Content.Full>
        <div className=" h-[100px] bg-secondary">퀴즈 카드 검색</div>
      </Layout.Content.Full>

      <Layout.Content.Left>
        <div className=" h-[700px] bg-gray-3">퀴즈 카드 검색</div>
      </Layout.Content.Left>
      <Layout.Content.Right>
        <div className=" h-[800px] bg-warning">퀴즈 카드 폼</div>
      </Layout.Content.Right>
    </>
  );
}
