'use client';

import { CloseIcon, MenuIcon } from 'assets/icons';
import Portal from 'components/common/portal';
import Nav from 'components/header/nav';
import { useAppDispatch, useModalOpen, useTheme } from 'hooks';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { setKeyword } from 'redux/slices/keywordSlice';

import Modal from './modal/modal';

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
    <header className="h-[84px] bg-red-500">
      <div>
        <div>
          <div>
            <button type="button" onClick={handleLogoClick}>
              이상원 기술 블로그
            </button>
          </div>
          <div>
            <Nav
              isTabletNav={false}
              onToggle={handleStateToggle}
              isDarkMode={isDarkMode}
            />
          </div>
          <div>
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
      <div>
        {/* <div className={cx('sideNav', isSideNavOpen && 'on')}> */}
        <Nav isTabletNav onToggle={handleStateToggle} isDarkMode={isDarkMode} />
      </div>
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
