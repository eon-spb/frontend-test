import React from 'react';

import { navPanel } from './data/navigation';

import styles from './NavPanel.module.scss';

type TProps = {
  activeFilter: string;
  setIsSearchOpen: (isOpen: boolean) => void;
  setActiveFilter: (filter: string) => void;
};

function NavPanel({ setIsSearchOpen, setActiveFilter, activeFilter }: TProps) {
  const handleNavPanel = (text: string, type: string | undefined) => {
    if (type) {
      setActiveFilter(type);
    }
    if (text === 'Поиск') {
      setIsSearchOpen(true);
    }
  };

  return (
    <nav className={styles.navPanel}>
      {navPanel.map((item, i) => {
        return (
          <a
            key={i}
            className={styles.navPanel__btn}
            onClick={() => handleNavPanel(item.text, item.type)}
          >
            <item.icon color={activeFilter === item.type ? '#e6e6e6' : '#737373'} />
            <span className={activeFilter === item.type ? styles.active : ''}>{item.text}</span>
          </a>
        );
      })}
    </nav>
  );
}

export default NavPanel;
