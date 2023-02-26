import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 270 1148' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 10C0 4.47715 4.47715 0 10 0H260C265.523 0 270 4.47715 270 10V1138C270 1143.52 265.523 1148 260 1148H9.99999C4.47715 1148 0 1143.52 0 1138V10Z'
      fill='white'
      stroke='#EAEDF3'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
