import * as React from 'react';
import { SVGProps } from 'react';

const ArrowDown: React.FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.407 13.393a1 1 0 0 0-1.414 1.414l4.2 4.2a1.002 1.002 0 0 0 1.414 0l4.2-4.2a1 1 0 0 0-1.414-1.414L15.9 16.886l-3.493-3.493Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ArrowDown;
