import Header from '@/share/layout/Header';
import HomeLayout from '@/share/layout/HomeLayout';

export default async function Home() {
  return (
    <HomeLayout>
      <Header />
      <HomeLayout.Top>
        <div className="h-full bg-gray-1">top</div>
      </HomeLayout.Top>
      <HomeLayout.Center>
        <div className="h-full bg-primary">center</div>
      </HomeLayout.Center>
      <HomeLayout.Bottom>
        <div className="h-full bg-warning">bottom1</div>
        <div className="h-full bg-gray-5">bottom2</div>
      </HomeLayout.Bottom>
      <HomeLayout.Right>
        <div className="h-full bg-secondary">right1</div>
        <div className="h-full bg-warning">right2</div>
        <div className="h-full bg-secondary">right3</div>
      </HomeLayout.Right>
    </HomeLayout>
  );
}
