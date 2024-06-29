import Next from './svg/next';
import Plus from './svg/plus';
import Prev from './svg/prev';
import Search from './svg/search';

export type IconType = 'plus' | 'search' | 'next' | 'prev';

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
    prev: Prev,
    next: Next,
  };

  const SelectedIcon = icons[icon];

  return <SelectedIcon size={size} color={color} />;
}
