'use client';
import Link from 'next/link';

import styles from './header.module.scss';
import { CloseIcon, MenuIcon } from 'assets';
import { useEffect, useState } from 'react';

import Nav from './Nav';
import Modal from './modal/Modal';
import Portal from 'components/common/Portal';

export default function Header() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleState = (state: 'dark' | 'modal') => {
    state === 'dark'
      ? setIsDarkMode(!isDarkMode)
      : setIsSearchModalOpen(!isSearchModalOpen);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      `${isDarkMode ? 'dark' : 'light'}`,
    );
  }, [isDarkMode]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
              onToggle={handleToggleState}
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
            onToggle={handleToggleState}
            isDarkMode={isDarkMode}
          />
        </div>
      )}
      {isSearchModalOpen && (
        <Portal>
          <Modal
            setIsSearchModalOpen={setIsSearchModalOpen}
            setIsSideNavOpen={setIsSideNavOpen}
          />
        </Portal>
      )}
    </header>
  );
}
