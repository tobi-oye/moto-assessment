import { memo, SVGProps } from 'react';

const PolygonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.83421 0.999432C7.15084 0.524142 7.84917 0.524141 8.1658 0.999431L13.1668 8.50647C13.521 9.03813 13.1398 9.75 12.501 9.75H2.49901C1.86018 9.75 1.47904 9.03813 1.83322 8.50647L6.83421 0.999432Z'
      fill='#21BA30'
    />
  </svg>
);

const Memo = memo(PolygonIcon);
export { Memo as PolygonIcon };
