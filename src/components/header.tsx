import { GithubIcon } from 'assets/icons';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white px-4 shadow-sm md:px-[37px]">
      <div className="mx-auto flex h-[64px] max-w-[1200px] items-center">
        <div className="flex flex-1 items-center justify-between">
          <Link href="/" className="text-lg font-medium text-gray-800">
            이상원 기술 블로그
          </Link>
          <Link href="https://github.com/bisari31" target="_blank">
            <GithubIcon width={24} height={24} className="fill-gray-600" />
          </Link>
        </div>
      </div>
    </header>
  );
}
