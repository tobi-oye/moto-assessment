import { memo, SVGProps } from 'react';

const ChevronDown1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.66673 6.13673L3.13673 5.66673L8.00007 10.0567L12.8634 5.66673L13.3334 6.13673L8.00007 11.0001L2.66673 6.13673Z'
      fill='#999999'
    />
  </svg>
);

const Memo = memo(ChevronDown1Icon);
export { Memo as ChevronDown1Icon };
