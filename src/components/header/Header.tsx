'use client';
import Link from 'next/link';

import styles from './header.module.scss';
import { CloseIcon, MenuIcon } from 'assets';
import { useState } from 'react';

import Nav from './Nav';
import Modal from './modal/Modal';
import Portal from 'components/common/Portal';
import { useTheme, useModalOpen } from 'hooks';

export default function Header() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { isDarkMode, handleThemeToggle } = useTheme();
  const { isModalOpen, setIsModalOpen } = useModalOpen();

  const handleStateToggle = (state: 'dark' | 'modal') => {
    state === 'dark' ? handleThemeToggle() : setIsModalOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <div className={styles.logo}>
            <Link href="/">기술 블로그</Link>
          </div>
          <div className={styles.navWrapper}>
            <Nav
              isTabletNav={false}
              onToggle={handleStateToggle}
              isDarkMode={isDarkMode}
            />
          </div>
          <div className={styles.tabletButton}>
            <button
              type="button"
              onClick={() => setIsSideNavOpen((prev) => !prev)}
            >
              {isSideNavOpen ? (
                <CloseIcon width={20} height={20} viewBox="2 2 20 20 " />
              ) : (
                <MenuIcon width={20} height={20} />
              )}
            </button>
          </div>
        </div>
      </div>
      {isSideNavOpen && (
        <div className={styles.sideNavWrapper}>
          <Nav
            isTabletNav
            onToggle={handleStateToggle}
            isDarkMode={isDarkMode}
          />
        </div>
      )}
      {isModalOpen && (
        <Portal>
          <Modal
            setIsSearchModalOpen={setIsModalOpen}
            setIsSideNavOpen={setIsSideNavOpen}
          />
        </Portal>
      )}
    </header>
  );
}
