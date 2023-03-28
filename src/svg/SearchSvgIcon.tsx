import * as React from 'react';
import { SVGProps } from 'react';
const SearchSvgIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M24 19a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-.808 5.606a7 7 0 1 1 1.414-1.414l.101.1 3 3a1 1 0 0 1-1.414 1.415l-3-3-.1-.1Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SearchSvgIcon;
