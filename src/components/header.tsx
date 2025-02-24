'use client';
import { Email, GithubIcon } from 'assets/icons';
import { title } from 'constants/metadata';
import Link from 'next/link';
import { useKeywordActions } from 'stores/keyword-store';

export default function Header() {
  const { setKeyword } = useKeywordActions();
  const goHome = () => {
    setKeyword('all');
  };
  return (
    <header className="sticky top-0 z-50 border-b bg-bg px-4 sm:px-[37px]">
      <div className="mx-auto flex h-14 max-w-5xl items-center">
        <div className="flex flex-1 items-center justify-between">
          <Link
            href={'/'}
            onClick={goHome}
            className="font-medium text-gray-900"
          >
            {title}
          </Link>
          <div className="flex items-center gap-3">
            <Link
              aria-label="email:bisari31@gmail.com"
              href="mailto:bisari31@gmail.com"
            >
              <Email
                width={32}
                height={32}
                className="fill-gray-600 stroke-white"
              />
            </Link>
            <Link
              aria-label="github link"
              href="https://github.com/bisari31"
              target="_blank"
            >
              <GithubIcon width={24} height={24} className="fill-gray-600" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
