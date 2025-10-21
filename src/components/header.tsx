'use client';
import cn from 'lib/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b bg-bg px-4 sm:px-[37px]">
      <div className="mx-auto flex h-14 max-w-3xl items-center">
        <div className="flex flex-1 items-center space-x-4">
          <Link
            href={'/'}
            className={cn(
              'font-medium text-gray-900 decoration-gray-500 underline-offset-4 hover:underline',
              pathname !== '/about' && 'underline',
            )}
          >
            Home
          </Link>
          <Link
            href={'/about'}
            className={cn(
              'font-medium text-gray-900 decoration-gray-500 underline-offset-4 hover:underline',
              pathname === '/about' && 'underline',
            )}
          >
            About
          </Link>
          {/* <div className="flex items-center gap-3">
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
          </div> */}
        </div>
      </div>
    </header>
  );
}
