import React from "react";

export const EyeOff: React.FC<React.SVGAttributes<SVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1 1L15 15" stroke="currentColor" strokeWidth="1" />
    <path
      d="M11.96 11.96C10.76 12.78 9.43 13.3333 8 13.3333C3.33333 13.3333 1 8 1 8C1.74667 6.50667 2.98667 5.23333 4.51333 4.34667"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path
      d="M6.6 2.82667C7.06 2.70667 7.52667 2.66667 8 2.66667C12.6667 2.66667 15 8 15 8C14.5567 8.84 13.9867 9.6 13.3067 10.2533"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>
);
