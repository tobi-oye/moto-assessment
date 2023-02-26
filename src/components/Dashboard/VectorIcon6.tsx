import { memo, SVGProps } from 'react';

const VectorIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 5V0' stroke='#5D6C76' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(VectorIcon6);
export { Memo as VectorIcon6 };
