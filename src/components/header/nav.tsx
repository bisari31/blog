import { GithubIcon, MoonIcon, SearchIcon, SunIcon } from 'assets/icons';
import Link from 'next/link';

interface Props {
  onToggle: (state: 'dark' | 'modal') => void;
  isDarkMode: boolean;
  isTabletNav: boolean;
}

export default function Nav({ isDarkMode, onToggle, isTabletNav }: Props) {
  return (
    <nav>
      <div>
        <button type="button" onClick={() => onToggle('modal')}>
          <SearchIcon width={15} height={15} />
          <span>Search..</span>
          <span>⌘K</span>
        </button>
      </div>
      <div>
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
