'use client';
import { GithubIcon } from 'assets/icons';
import { title } from 'constants/metadata';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useKeywordActions } from 'stores/keyword-store';

export default function Header() {
  const { setKeyword } = useKeywordActions();
  const router = useRouter();
  const goHome = () => {
    router.push('/');
    setKeyword('all');
  };
  return (
    <header className="sticky top-0 z-50 border-b bg-bg px-4 sm:px-[37px]">
      <div className="mx-auto flex h-14 max-w-5xl items-center">
        <div className="flex flex-1 items-center justify-between">
          <button
            type="button"
            onClick={goHome}
            className="font-medium text-gray-900"
          >
            {title}
          </button>
          <Link href="https://github.com/bisari31" target="_blank">
            <GithubIcon width={24} height={24} className="fill-gray-600" />
          </Link>
        </div>
      </div>
    </header>
  );
}
