import React from 'react';

function SeriesSvg({ color }: { color: string }) {
  return (
    <svg fill={color} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20.5C16.9705 20.5 20.5 16.9706 20.5 12C20.5 7.02944 16.9705 3.5 12 3.5C7.02941 3.5 3.49997 7.02944 3.49997 12C3.49997 16.9706 7.02941 20.5 12 20.5ZM12 22.5C18.0751 22.5 22.5 18.0751 22.5 12C22.5 5.92487 18.0751 1.5 12 1.5C5.92484 1.5 1.49997 5.92487 1.49997 12C1.49997 18.0751 5.92484 22.5 12 22.5Z"
      />
      <path d="M5.27548 11H7.27548L7.32672 10.8359C7.43455 10.4907 7.62237 10.1405 7.97042 10.0423C8.06645 10.0152 8.16852 10 8.27548 10C8.38244 10 8.4845 10.0152 8.58053 10.0423C8.92858 10.1405 9.1164 10.4907 9.22423 10.8359L9.27548 11H11.2755C11.2755 10.6363 11.141 9.80534 11 9.55855C10.8491 9.29444 10.6412 9.03953 10.3915 8.81656C9.89184 8.37044 9.16275 8 8.27548 8C7.3882 8 6.65912 8.37044 6.15946 8.81656C5.90973 9.03953 5.7019 9.29444 5.55098 9.55855C5.40996 9.80534 5.27548 10.6363 5.27548 11Z" />
      <path d="M13 11H15L15.0512 10.8359C15.159 10.4907 15.3469 10.1405 15.6949 10.0423C15.7909 10.0152 15.893 10 16 10C16.1069 10 16.209 10.0152 16.305 10.0423C16.6531 10.1405 16.8409 10.4907 16.9487 10.8359L17 11H19C19 10.6363 18.8655 9.80534 18.7245 9.55855C18.5735 9.29444 18.3657 9.03953 18.116 8.81656C17.6163 8.37044 16.8872 8 16 8C15.1127 8 14.3836 8.37044 13.8839 8.81656C13.6342 9.03953 13.4264 9.29444 13.2755 9.55855C13.1344 9.80534 13 10.6363 13 11Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7177 17.5308C8.64436 17.1191 7.04935 15.7325 6.19997 14.6L7.79997 13.4C8.45059 14.2675 9.65558 15.2809 11.1072 15.5692C12.4704 15.8398 14.2569 15.5125 16.2628 13.3243L17.7371 14.6757C15.343 17.2875 12.8795 17.9602 10.7177 17.5308Z"
      />
    </svg>
  );
}

export default SeriesSvg;
