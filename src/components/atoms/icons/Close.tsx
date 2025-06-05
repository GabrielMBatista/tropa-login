import React from 'react';

export const Close: React.FC<React.SVGAttributes<SVGElement>> = (props) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
<g clip-path="url(#clip0_30_5726)">
<rect x="2" y="2" width="18" height="18" rx="9" fill="currentColor"/>
<g clip-path="url(#clip1_30_5726)">
<path d="M7.5 7.5L14.5 14.5M7.5 14.5L14.5 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
<rect x="1" y="1" width="20" height="20" rx="10" stroke="currentColor" stroke-width="2"/>
<defs>
<clipPath id="clip0_30_5726">
<rect x="2" y="2" width="18" height="18" rx="9" fill="currentColor"/>
</clipPath>
<clipPath id="clip1_30_5726">
<rect width="18" height="18" fill="currentColor" transform="translate(2 2)"/>
</clipPath>
</defs>
</svg>
);
