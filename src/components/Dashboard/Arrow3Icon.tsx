import { memo, SVGProps } from 'react';

const Arrow3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18.3536 0.353553C18.5488 0.158291 18.5488 -0.158291 18.3536 -0.353553L15.1716 -3.53553C14.9763 -3.7308 14.6597 -3.7308 14.4645 -3.53553C14.2692 -3.34027 14.2692 -3.02369 14.4645 -2.82843L17.2929 0L14.4645 2.82843C14.2692 3.02369 14.2692 3.34027 14.4645 3.53553C14.6597 3.7308 14.9763 3.7308 15.1716 3.53553L18.3536 0.353553ZM0 0.5H18V-0.5H0V0.5Z'
      fill='#161919'
    />
  </svg>
);

const Memo = memo(Arrow3Icon);
export { Memo as Arrow3Icon };
