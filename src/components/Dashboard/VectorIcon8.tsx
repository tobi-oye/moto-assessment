import { memo, SVGProps } from 'react';

const VectorIcon8 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 13.3333V0' stroke='#5D6C76' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(VectorIcon8);
export { Memo as VectorIcon8 };
