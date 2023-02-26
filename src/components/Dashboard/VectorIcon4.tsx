import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.95 6.76667L4.28333 0.933333C3.82291 0.704174 3.30301 0.622592 2.79453 0.69971C2.28604 0.776827 1.81372 1.00889 1.44194 1.36426C1.07017 1.71963 0.817044 2.18102 0.717077 2.68551C0.617111 3.19 0.675168 3.71304 0.883333 4.18333L2.88333 8.65833C2.92871 8.76653 2.95209 8.88268 2.95209 9C2.95209 9.11732 2.92871 9.23347 2.88333 9.34167L0.883333 13.8167C0.713917 14.1973 0.642296 14.6142 0.674981 15.0295C0.707665 15.4448 0.843618 15.8453 1.07048 16.1948C1.29735 16.5442 1.60794 16.8313 1.97402 17.0302C2.3401 17.229 2.75007 17.3332 3.16667 17.3333C3.55686 17.3294 3.94124 17.2383 4.29167 17.0667L15.9583 11.2333C16.3722 11.0252 16.72 10.7061 16.9631 10.3117C17.2061 9.91738 17.3348 9.46324 17.3348 9C17.3348 8.53676 17.2061 8.08262 16.9631 7.68827C16.72 7.29391 16.3722 6.97485 15.9583 6.76667H15.95ZM15.2083 9.74167L3.54167 15.575C3.38847 15.6486 3.21644 15.6735 3.04866 15.6465C2.88087 15.6196 2.72534 15.5419 2.60293 15.424C2.48051 15.3062 2.39707 15.1537 2.36378 14.987C2.33048 14.8204 2.34894 14.6475 2.41667 14.4917L4.40833 10.0167C4.43412 9.95691 4.45638 9.89569 4.475 9.83333H10.2167C10.4377 9.83333 10.6496 9.74554 10.8059 9.58926C10.9622 9.43298 11.05 9.22101 11.05 9C11.05 8.77899 10.9622 8.56703 10.8059 8.41074C10.6496 8.25446 10.4377 8.16667 10.2167 8.16667H4.475C4.45638 8.10431 4.43412 8.04309 4.40833 7.98333L2.41667 3.50833C2.34894 3.35247 2.33048 3.17962 2.36378 3.01297C2.39707 2.84632 2.48051 2.69384 2.60293 2.57596C2.72534 2.45808 2.88087 2.38044 3.04866 2.35346C3.21644 2.32648 3.38847 2.35144 3.54167 2.425L15.2083 8.25833C15.3448 8.32826 15.4594 8.43451 15.5394 8.56537C15.6194 8.69623 15.6617 8.84663 15.6617 9C15.6617 9.15337 15.6194 9.30377 15.5394 9.43463C15.4594 9.56549 15.3448 9.67174 15.2083 9.74167V9.74167Z'
      fill='#5D6C76'
    />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };