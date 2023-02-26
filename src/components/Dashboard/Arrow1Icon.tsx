import { memo, SVGProps } from 'react';

const Arrow1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18.3536 0.353555C18.5488 0.158293 18.5488 -0.15829 18.3536 -0.353552L15.1716 -3.53553C14.9763 -3.73079 14.6597 -3.73079 14.4645 -3.53553C14.2692 -3.34027 14.2692 -3.02369 14.4645 -2.82843L17.2929 1.51179e-06L14.4645 2.82843C14.2692 3.02369 14.2692 3.34027 14.4645 3.53554C14.6597 3.7308 14.9763 3.7308 15.1716 3.53554L18.3536 0.353555ZM-4.37114e-08 0.5L18 0.500002L18 -0.499998L4.37114e-08 -0.5L-4.37114e-08 0.5Z'
      fill='#161919'
    />
  </svg>
);

const Memo = memo(Arrow1Icon);
export { Memo as Arrow1Icon };
