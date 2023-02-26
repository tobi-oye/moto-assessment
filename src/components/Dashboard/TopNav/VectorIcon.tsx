import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1095 70' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 10C0 4.47715 4.47715 0 10 0H1085C1090.52 0 1095 4.47715 1095 10V60C1095 65.5228 1090.52 70 1085 70H10C4.47718 70 0 65.5228 0 60V10Z'
      fill='white'
      stroke='#EAEDF3'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
