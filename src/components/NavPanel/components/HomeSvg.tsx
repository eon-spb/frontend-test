import React from 'react';

function HomeSvg({ color }: { color: string }) {
  return (
    <svg width="24" fill={color} height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.4 14.5H10.4V20.5H3.89997V9.62354C3.89997 9.54568 3.93625 9.47225 3.99811 9.42495L12.2481 3.11613C12.3377 3.04758 12.4622 3.04758 12.5518 3.11613L20.8018 9.42495C20.8637 9.47225 20.9 9.54568 20.9 9.62354V20.5H14.4V14.5Z" />
    </svg>
  );
}

export default HomeSvg;
