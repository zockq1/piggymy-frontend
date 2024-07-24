import { SvgProps } from '../Icon';

export default function Up({ color, size }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1725 13.2525L16.5 11.925L9.075 4.5L1.65 11.925L2.9775 13.2525L9.075 7.155L15.1725 13.2525Z"
        fill={color}
      />
    </svg>
  );
}
