import { SvgProps } from '../Icon';

export default function Down({ color, size }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.8275 4.7475L1.5 6.075L8.925 13.5L16.35 6.075L15.0225 4.7475L8.925 10.845L2.8275 4.7475Z"
        fill={color}
      />
    </svg>
  );
}
