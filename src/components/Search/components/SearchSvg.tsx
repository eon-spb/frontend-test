import React from 'react';

function SearchSvg({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      fill="#737373"
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_536_1266)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.8 18C15.666 18 18.8 14.866 18.8 11C18.8 7.13401 15.666 4 11.8 4C7.934 4 4.79999 7.13401 4.79999 11C4.79999 14.866 7.934 18 11.8 18ZM11.8 20C13.9138 20 15.8573 19.2713 17.3932 18.0514C17.964 17.598 18.4785 17.0768 18.9244 16.5C20.1003 14.9791 20.8 13.0712 20.8 11C20.8 6.02944 16.7706 2 11.8 2C6.82943 2 2.79999 6.02944 2.79999 11C2.79999 15.9706 6.82943 20 11.8 20Z"
        />
        <path d="M22.626 20.674C22.7225 20.5775 22.7238 20.4213 22.6288 20.3233L18.9244 16.5C18.4785 17.0768 17.964 17.598 17.3932 18.0514L21.1232 21.8213C21.2207 21.9199 21.3797 21.9203 21.4777 21.8223L22.626 20.674Z" />
      </g>
      <defs>
        <clipPath id="clip0_536_1266">
          <rect width="24" height="24" transform="translate(0.799988)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SearchSvg;
