'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { setKeyword } from 'redux/slices/keywordSlice';
import styles from './header.module.scss';
import { CloseIcon, MenuIcon } from 'assets';
import { useTheme, useModalOpen, useAppDispatch } from 'hooks';

import Nav from './Nav';
import Modal from './modal/Modal';
import Portal from 'components/common/Portal';

export default function Header() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { isDarkMode, handleThemeToggle } = useTheme();
  const { isModalOpen, setIsModalOpen } = useModalOpen();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleStateToggle = (state: 'dark' | 'modal') => {
    state === 'dark' ? handleThemeToggle() : setIsModalOpen((prev) => !prev);
  };

  const handleLogoClick = () => {
    dispatch(setKeyword('all'));
    router.push('/');
  };

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerInner}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <button type="button" onClick={handleLogoClick}>
              기술 블로그
            </button>
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
