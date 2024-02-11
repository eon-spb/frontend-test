import React from 'react';
import styles from './BookmarkButton.module.scss';

function BookmarkButton() {
  return (
    <button type="button" className={styles.bookmark}>
      <svg
        viewBox="0 0 24 24"
        className={styles.svg}
        width={18}
        height={18}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z"
        />
      </svg>
    </button>
  );
}

export default BookmarkButton;
