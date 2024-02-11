import React from 'react';

function Bookmark({ color }: { color: string }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        clipRule="evenodd"
        d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z"
      />
    </svg>
  );
}

export default Bookmark;
