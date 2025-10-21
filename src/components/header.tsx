'use client';
import cn from 'lib/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900 px-4 sm:px-[37px]">
      <div className="mx-auto flex h-14 max-w-3xl items-center">
        <div className="flex flex-1 items-center space-x-4">
          <Link
            href={'/'}
            className={cn(
              'font-medium decoration-white underline-offset-4 hover:underline',
              pathname !== '/about' && 'underline',
            )}
          >
            Home
          </Link>
          <Link
            href={'/about'}
            className={cn(
              'font-medium decoration-white underline-offset-4 hover:underline',
              pathname === '/about' && 'underline',
            )}
          >
            About
          </Link>
        </div>
      </div>
    </header>
  );
}
