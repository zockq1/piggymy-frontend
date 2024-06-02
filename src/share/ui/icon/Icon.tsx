import Plus from './svg/plus';
import Search from './svg/search';

export type IconType = 'plus' | 'search';

export interface SvgProps {
  color: string;
  size: number;
}

interface IconProps {
  icon: IconType;
  color?: string;
  size?: number;
}

export default function Icon({
  icon,
  size = 24,
  color = 'currentColor',
}: IconProps) {
  const icons = {
    plus: Plus,
    search: Search,
  };

  const SelectedIcon = icons[icon];

  return <SelectedIcon size={size} color={color} />;
}
