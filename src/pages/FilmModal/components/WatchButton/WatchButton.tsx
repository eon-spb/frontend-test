import React from 'react';

import styles from './WatchButton.module.scss';

function WatchButton() {
  return (
    <button className={styles.watchBtn} type="button">
      <svg
        className={styles.watchBtn__icon_svg}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={styles.watchBtn__icon_path}
          d="M13.8756 8.46594C14.4266 8.87529 14.4108 9.7053 13.8447 10.0934L6.06546 15.4267C5.40185 15.8817 4.5 15.4066 4.5 14.602L4.5 3.48879C4.5 2.66682 5.4366 2.19588 6.09639 2.68609L13.8756 8.46594Z"
        />
      </svg>
      <span className={styles.watchBtn__text}>Смотреть</span>
    </button>
  );
}

export default WatchButton;
