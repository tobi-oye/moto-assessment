import { memo, SVGProps } from 'react';

const EllipseIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={15} cy={15} r={15} fill='#ECF0F7' />
  </svg>
);

const Memo = memo(EllipseIcon6);
export { Memo as EllipseIcon6 };
