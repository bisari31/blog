'use client';

import Link from 'next/link';
import { useState } from 'react';

import styles from './header.module.scss';
import { CloseIcon, MenuIcon } from 'assets';
import { useTheme, useModalOpen } from 'hooks';

import Nav from './Nav';
import Modal from './modal/Modal';
import Portal from 'components/common/Portal';

export default function Header() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { isDarkMode, handleThemeToggle } = useTheme();
  const { isModalOpen, setIsModalOpen } = useModalOpen();

  const handleStateToggle = (state: 'dark' | 'modal') => {
    state === 'dark' ? handleThemeToggle() : setIsModalOpen((prev) => !prev);
  };

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerInner}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Link href="/">기술 블로그</Link>
          </div>
          <div className={styles.nav}>
            <Nav
              isTabletNav={false}
              onToggle={handleStateToggle}
              isDarkMode={isDarkMode}
            />
          </div>
          <div className={styles.mobileButton}>
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
        <div className={styles.sideNav}>
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
