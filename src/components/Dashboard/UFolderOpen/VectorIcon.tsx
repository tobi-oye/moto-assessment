import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M21.78 7.37C21.6859 7.25398 21.567 7.16052 21.432 7.09649C21.297 7.03246 21.1494 6.99949 21 7H19V6C19 5.20435 18.6839 4.44129 18.1213 3.87868C17.5587 3.31607 16.7956 3 16 3H9.72L9.4 2C9.19255 1.41323 8.80775 0.905503 8.2989 0.547161C7.79005 0.188818 7.18236 -0.00239931 6.56 -1.07751e-07H3C2.20435 -1.07751e-07 1.44129 0.31607 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V15C0 15.7956 0.31607 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H17.4C18.0812 17.998 18.7415 17.7642 19.2722 17.3371C19.8029 16.91 20.1724 16.315 20.32 15.65L22 8.22C22.0304 8.07092 22.0264 7.91686 21.9883 7.76956C21.9502 7.62227 21.8789 7.48561 21.78 7.37ZM4.37 15.22C4.3192 15.4456 4.19179 15.6466 4.00946 15.7888C3.82714 15.931 3.60116 16.0057 3.37 16H3C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H6.56C6.77807 1.98862 6.99386 2.04893 7.17443 2.17171C7.355 2.2945 7.49042 2.47302 7.56 2.68L8.1 4.32C8.16417 4.51075 8.2844 4.67769 8.44497 4.79901C8.60554 4.92033 8.79898 4.99038 9 5H16C16.2652 5 16.5196 5.10536 16.7071 5.29289C16.8946 5.48043 17 5.73478 17 6V7H7C6.76884 6.99435 6.54286 7.06898 6.36054 7.2112C6.17821 7.35341 6.0508 7.55442 6 7.78L4.37 15.22ZM18.37 15.22C18.3192 15.4456 18.1918 15.6466 18.0095 15.7888C17.8271 15.931 17.6012 16.0057 17.37 16H6.21C6.26165 15.8886 6.29862 15.7709 6.32 15.65L7.8 9H19.8L18.37 15.22Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };