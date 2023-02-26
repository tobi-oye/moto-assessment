import { memo, SVGProps } from 'react';

const Files1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18.5 3V0H2.5V21H5.5V24H15C16.7239 24 18.3772 23.3152 19.5962 22.0962C20.8152 20.8772 21.5 19.2239 21.5 17.5V3H18.5ZM3.5 20V1H17.5V3H5.5V20H3.5ZM20.5 17.5C20.5 18.9587 19.9205 20.3576 18.8891 21.3891C17.8576 22.4205 16.4587 23 15 23H6.5V4H20.5V17.5Z'
      fill='black'
    />
    <path d='M17 9H10V10H17V9Z' fill='black' />
    <path d='M17 13H10V14H17V13Z' fill='black' />
    <path d='M15 17H10V18H15V17Z' fill='black' />
  </svg>
);

const Memo = memo(Files1Icon);
export { Memo as Files1Icon };
