import { GithubIcon } from 'assets/icons';
import { title } from 'constants/metadata';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-bg sticky top-0 z-50 border-b px-4 sm:px-[37px]">
      <div className="mx-auto flex h-14 max-w-5xl items-center">
        <div className="flex flex-1 items-center justify-between">
          <Link href="/" className="font-medium text-gray-800">
            {title}
          </Link>
          <Link href="https://github.com/bisari31" target="_blank">
            <GithubIcon width={24} height={24} className="fill-gray-600" />
          </Link>
        </div>
      </div>
    </header>
  );
}
