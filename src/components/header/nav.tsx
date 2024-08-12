import { GithubIcon, MoonIcon, SearchIcon,SunIcon } from 'assets/icons';
import Link from 'next/link';

import styles from './nav.module.scss';

interface Props {
  onToggle: (state: 'dark' | 'modal') => void;
  isDarkMode: boolean;
  isTabletNav: boolean;
}


export default function Nav({ isDarkMode, onToggle, isTabletNav }: Props) {
  return (
    <nav>
    {/* <nav className={cx('wrapper', { isTabletNav })}> */}
      <div className={styles.search}>
        <button type="button" onClick={() => onToggle('modal')}>
          <SearchIcon width={15} height={15} />
          <span className={styles.placeholder}>Search..</span>
          <span className={styles.shortcut}>⌘K</span>
        </button>
      </div>
      <div className={styles.buttons}>
        <button type="button" onClick={() => onToggle('dark')}>
          {isDarkMode ? (
            <MoonIcon width={20} height={20} viewBox="1 1 22 22" />
          ) : (
            <SunIcon width={20} height={20} />
          )}
        </button>
        <Link href="https://github.com/bisari31" target="_blank">
          <GithubIcon width={20} height={20} viewBox="0 0 100 100" />
        </Link>
      </div>
    </nav>
  );
}
