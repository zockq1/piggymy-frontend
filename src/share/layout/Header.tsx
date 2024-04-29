import HeaderComponent from '@/share/ui/header/Header';

export default function Header() {
  return (
    <div
      style={{
        gridArea: 'header',
      }}
    >
      <div className="h-full">
        <HeaderComponent />
      </div>
    </div>
  );
}
