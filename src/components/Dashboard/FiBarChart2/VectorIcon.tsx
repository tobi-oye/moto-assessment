import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 6V0' stroke='black' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
